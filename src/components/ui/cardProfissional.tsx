"use client";

import { AvatarProfile } from "./avatar";
import { Card } from "./card";
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { Button } from "./button";
import Stars from "./stars";

interface CardProfissional {
  image?: string;
  name: string;
  profissao: string;
  nota: number;
}

const CardProfissional = ({
  image,
  name,
  profissao,
  nota,
}: CardProfissional) => {
  const [isActive, setIsActive] = useState(false);
  const MAX_NAME_LENGTH = 18;
  const truncatedName =
    name.length > MAX_NAME_LENGTH
      ? `${name.substring(0, MAX_NAME_LENGTH)}...`
      : name;
  return (
    <Card className="relative flex  max-h-[230px] w-56 flex-col bg-white pb-3 pl-3 pr-3 pt-2 shadow-md">
      {isActive ? (
        <AiFillHeart
          className="absolute right-1 top-1 cursor-pointer text-red-500"
          size={24}
          onClick={() => setIsActive(false)}
        />
      ) : (
        <AiOutlineHeart
          className="absolute right-1 top-1 cursor-pointer text-gray-400"
          size={24}
          onClick={() => setIsActive(true)}
        />
      )}
      <div className="flex flex-col items-center justify-center">
        <AvatarProfile src={image} className="h-[75px] w-[75px]" />
        <span className="mt-1 text-base font-semibold text-[--primary-font]">
          {truncatedName}
        </span>
        <strong className="text-sm font-semibold text-[#676666]">
          {profissao}
        </strong>

        <Stars number={nota} />
        <Button className="mt-4 w-full " variant={"link"}>
          Informações
        </Button>
      </div>
    </Card>
  );
};

export default CardProfissional;
