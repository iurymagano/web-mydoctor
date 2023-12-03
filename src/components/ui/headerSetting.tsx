"use client";

import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { usePacienteStore } from "@/store/pacienteStore";
import AvatarPerfil from "../avatar";
import { Badge } from "@nextui-org/react";

export const HeaderSettings = () => {
  const { paciente } = usePacienteStore();
  return (
    <>
      <CiSettings
        size={24}
        className="cursor-pointer text-[#7A8699] hover:animate-spin hover:text-[--primary] "
      />
      <Badge isOneChar content={"2"} color="danger" shape="circle">
        <IoIosNotificationsOutline
          size={24}
          className="cursor-pointer text-[#7A8699] transition hover:text-[--primary]"
        />
      </Badge>
      <Link href="/perfil" className="flex items-center gap-2">
        <AvatarPerfil
          src={paciente?.image}
          size="sm"
          positionBadge="top-right"
          colorBadge="success"
          showOutlineBadge={true}
        />
        <span>{paciente.nome}</span>
      </Link>
    </>
  );
};
