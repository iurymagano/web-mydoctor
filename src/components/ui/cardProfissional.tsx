"use client";

import { Card } from "./card";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { Button } from "./button";
import Stars from "./stars";
import AvatarPerfil from "../avatar";
import { fetchData } from "@/data/fetchData";
import { usePacienteStore } from "@/store/pacienteStore";

interface CardProfissional {
  id: number;
  image?: string;
  name: string;
  profissao: string;
  nota: number;
  isActiveState?: boolean;
}

const CardProfissional = ({
  id,
  image,
  name,
  profissao,
  nota,
  isActiveState,
}: CardProfissional) => {
  const { paciente } = usePacienteStore();
  const [isActive, setIsActive] = useState(isActiveState);
  const MAX_NAME_LENGTH = 18;
  const truncatedName =
    name.length > MAX_NAME_LENGTH
      ? `${name.substring(0, MAX_NAME_LENGTH)}...`
      : name;

  const handleLike = async () => {
    const resp = await fetchData({
      data: {
        profissional_id: id,
        paciente_id: paciente.id,
      },
      path: "like/pacientes",
      token: paciente.token,
    });
    console.log(resp);
    setIsActive(true);
  };

  const handleFollow = async () => {
    await fetchData({
      data: {
        profissional_id: id,
        paciente_id: paciente.id,
      },
      method: "DELETE",
      path: "like/pacientes",
      token: paciente.token,
    });
    setIsActive(false);
  };

  return (
    <Card className="relative flex  max-h-[200px] w-56 flex-col justify-between bg-white pb-3 pl-3 pr-3 pt-2 shadow-md">
      <div>
        {isActive ? (
          <AiFillHeart
            className="absolute right-1 top-1 cursor-pointer text-red-500"
            size={24}
            onClick={handleFollow}
          />
        ) : (
          <AiOutlineHeart
            className="absolute right-1 top-1 cursor-pointer text-gray-400"
            size={24}
            onClick={handleLike}
          />
        )}
        <div className="flex flex-col items-center justify-center">
          <AvatarPerfil src={image} size="lg" isInvisibleBadge />
          <span className="mt-1 text-base font-semibold text-gray-600">
            {truncatedName}
          </span>
          <strong className="text-sm font-semibold text-slate-400">
            {profissao}
          </strong>

          <Stars number={nota} />
        </div>
      </div>
      <Button className="mt-4 w-full " variant={"link"}>
        Informações
      </Button>
    </Card>
  );
};

export default CardProfissional;
