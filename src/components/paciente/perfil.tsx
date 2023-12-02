"use client";

import { AvatarProfile } from "../ui/avatar";
import Banner from "../ui/banner";
import UploadImage from "../ui/uploadImage";
import { Modal } from "../ui/modal";
import { useState } from "react";
import { usePacienteStore } from "@/store/pacienteStore";
import { fetchData } from "@/data/fetchData";

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
    setOpen(false);

    update({ image: resp.url });
  };
  return (
    <div className="flex w-full flex-col">
      <Banner />
      <div className="flex px-6">
        <AvatarProfile
          className="mt-[-40px] h-28 w-28 cursor-pointer rounded-lg"
          src={paciente.image}
          onClick={() => setOpen(true)}
        />
        <div className=" ml-2 flex flex-col items-start justify-start self-center">
          <span className="ml-2 text-2xl font-semibold text-[--primary]">
            {paciente?.nome}
          </span>
          <span className="ml-2  text-base ">{paciente?.email} </span>
        </div>
      </div>
      <Modal onOpenChange={setOpen} open={open}>
        <UploadImage onCallback={onCallback} />
      </Modal>
    </div>
  );
};

export default Perfil;
