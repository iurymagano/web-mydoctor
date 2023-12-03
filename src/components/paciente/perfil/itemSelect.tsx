import { ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa";

interface ItemSelectProps {
  selected?: boolean;
  icon: ReactNode;
  text: string;
}

export const ItemSelect = ({ selected, text, icon }: ItemSelectProps) => {
  const color = selected ? "text-gray-600 " : "text-gray-400 ";
  return (
    <div
      className={`${color} flex min-w-[230px] items-center gap-6 border-b-2 border-gray-200 px-4  py-2  shadow-border`}
    >
      {icon}
      <div className=" font-semibold ">{text}</div>
      {selected && <FaAngleRight />}
    </div>
  );
};
