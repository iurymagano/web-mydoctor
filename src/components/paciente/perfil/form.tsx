"use client";

import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { dataInputs } from "./helpers/dataInput";
import { usePacienteStore } from "@/store/pacienteStore";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormPacienteSchema } from "./helpers/schemaForm";
import { z } from "zod";
import { fetchData } from "@/data/fetchData";
import { ToastContainer, toast } from "react-toastify";

type CreatePacienteFormData = z.infer<typeof createFormPacienteSchema>;
type FormKeys = "nome" | "email" | "documento" | "telefone";

export const Form = () => {
  const { paciente, update } = usePacienteStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreatePacienteFormData>({
    resolver: zodResolver(createFormPacienteSchema),
  });

  useEffect(() => {
    if (paciente) {
      const { nome, email, documento, telefone } = paciente;
      const data = { nome, email, documento, telefone };

      Object.keys(data).forEach((key) => {
        const dataKey = key as FormKeys;

        if (data[dataKey]) {
          //@ts-ignore
          setValue(dataKey, data[dataKey]);
        }
      });
    }
  }, [paciente, setValue]);

  const handleSavePaciente = handleSubmit(async (formData) => {
    const data = { ...formData, id: paciente.id };
    const respPaciente = await fetchData({
      data,
      path: "pacientes",
      method: "PUT",
      token: paciente.token,
    });
    if (respPaciente.respData) {
      const respData = respPaciente.respData;
      update(respData);

      toast.success("Dados atualizado com sucesso");
    }
  });

  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={handleSavePaciente}
    >
      <div className="grid grid-cols-2 gap-4">
        {dataInputs.map((input) => (
          <Input
            key={input.fieldName}
            label={input.label}
            required={input.required}
            {...register(input.fieldName as any)}
            msgErro={
              //@ts-ignore
              errors[input.fieldName as keyof CreateUserFormData]?.message
            }
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSavePaciente}>Salvar</Button>
        <ToastContainer />
      </div>
    </form>
  );
};
