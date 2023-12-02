"use client";

import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AvatarNotification } from "@/components/avatarNotification/AvatarNotification";
import { usePacienteStore } from "@/store/pacienteStore";

export const HeaderSettings = () => {
  const { paciente } = usePacienteStore();
  return (
    <>
      <CiSettings
        size={24}
        className="cursor-pointer text-[#7A8699] hover:animate-spin hover:text-[--primary] "
      />
      <IoIosNotificationsOutline
        size={24}
        className="cursor-pointer text-[#7A8699] transition hover:text-[--primary]"
      />
      <Link href="/perfil" className="flex items-center gap-2">
        <AvatarNotification src={paciente?.image} />
        <span>{paciente.nome}</span>
      </Link>
    </>
  );
};
