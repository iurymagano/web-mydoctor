"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Icon from "@/assets/svg/teammedical.svg";
import Link from "next/link";
import CheckLabel from "@/components/ui/checkLabel";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { fetchData } from "@/data/fetchData";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createUserFormSchema } from "./helpers/createUserFormSchema";
import { inputsRecover } from "./helpers/inputsRecover";
type onCheckParams = {
  fieldName: string;
  value: boolean;
};

type UserProps = {
  nome: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

const FormNewUser = () => {
  const route = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });
  const [dataLogin, setDataLogin] = useState({
    typeUsuario: "PACIENTE",
  });
  const [loading, setLoading] = useState(false);

  const onCheck = ({ fieldName, value }: onCheckParams) => {
    const keys = ["PACIENTE", "PROFISSIONAL"];
    let type = fieldName;
    if (!value) {
      type = keys.filter((item) => item !== fieldName)[0];
    }
    setDataLogin((prev) => ({ ...prev, typeUsuario: type }));
  };

  const handleClickCreateUser = async ({
    nome,
    password,
    email,
  }: UserProps) => {
    if (!loading) {
      setLoading(true);

      const data = { email, password, nome, typeUser: dataLogin.typeUsuario };

      const resp = await fetchData({ data, path: "usuario", method: "POST" });

      if (resp?.error) {
        setLoading(false);
        const message = resp.error;
        toast.error(message);
        return;
      }

      setLoading(false);
      if (resp?.respData) {
        toast.success("Usuario salvo com sucesso!");
      }
      setTimeout(() => {
        route.replace("/");
      }, 2000);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleClickCreateUser)}
        className="flex min-w-fit flex-1 flex-col gap-2"
      >
        <span className="max-md:text-xlxl text-center text-3xl font-semibold">
          Crie sua conta
        </span>
        <span className="text-center text-base  max-md:text-sm">
          Agende sua consulta com facilidade agora
        </span>
        <div className="mt-4 flex flex-col gap-4">
          <CheckLabel
            label="Profissional"
            checked={dataLogin.typeUsuario.includes("PROFISSIONAL")}
            onChangeChecked={onCheck}
            fieldName="PROFISSIONAL"
          />
          <CheckLabel
            label="Paciente"
            checked={dataLogin.typeUsuario.includes("PACIENTE")}
            onChangeChecked={onCheck}
            fieldName="PACIENTE"
          />
          {inputsRecover.map((input) => (
            <div key={input.fieldName}>
              <Input
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                sizeInput="lg"
                {...register(input.fieldName as keyof CreateUserFormData)}
              />
              {errors[input.fieldName as keyof CreateUserFormData] && (
                <span className="pl-2 text-xs text-red-500">
                  {errors[input.fieldName as keyof CreateUserFormData]?.message}
                </span>
              )}
            </div>
          ))}
          <Button type="submit" loading={loading} size="lg">
            Criar conta
          </Button>

          <Link
            href="/"
            className="text-center"
            style={{ textDecoration: "underline" }}
          >
            Voltar para Login
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default FormNewUser;
