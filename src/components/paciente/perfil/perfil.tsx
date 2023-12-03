"use client";

import UploadImage from "../../ui/uploadImage";
import { useState } from "react";
import { usePacienteStore } from "@/store/pacienteStore";
import { fetchData } from "@/data/fetchData";
import { Form } from "./form";
import { Modal } from "@/components/ui/modal";
import AvatarPerfil from "@/components/avatar";
import { MdEdit } from "react-icons/md";

const Perfil = () => {
  const { paciente, update } = usePacienteStore();
  const [open, setOpen] = useState(false);
  const onCallback = async (resp: any) => {
    await fetchData({
      data: { image: resp.url, id: paciente.id },
      method: "PUT",
      path: "pacientes",
      token: paciente.token,
    });

    update({ image: resp.url });
    setOpen(false);
  };
  return (
    <div className="flex h-full w-full min-w-[600px] flex-col  px-6 pb-6">
      <div className="text-gray-600">Editar Perfil</div>
      <div className="my-6 flex justify-center">
        <AvatarPerfil
          name={paciente.nome}
          src={paciente.image}
          className="h-24 w-24 cursor-pointer "
          onClick={() => setOpen(true)}
          color="default"
          contentBadge={<MdEdit className=" text-white" size={18} />}
          classNameBadge="h-8 w-8 mb-4"
        />
        <Modal open={open} onOpenChange={setOpen}>
          <UploadImage onCallback={onCallback} />
        </Modal>
      </div>
      <Form />
    </div>
  );
};

export default Perfil;
