"use client";

import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdDataThresholding } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const route = useRouter();
  const pathname = usePathname();

  const Menus = [
    {
      title: "Dashboard",
      icon: <HiHome size={20} className="text-white" />,
      route: "/dashboard",
    },
    {
      title: "Paciente",
      icon: <FaUsers size={18} className="text-white" />,
      route: "/users",
    },
    {
      title: "Bate papo",
      icon: <BsFillChatDotsFill size={18} className="text-white" />,
      route: "/chat",
    },
    {
      title: "Relatorios",
      icon: <MdDataThresholding size={20} className="text-white" />,
      route: "/reports",
    },
    {
      title: "Agenda",
      icon: <FaCalendarAlt size={18} className="text-white" />,
      route: "/schedule",
    },
  ];

  const handleClickNavigation = (routePage: string) => {
    route.push(routePage);
  };

  const handleClickLogout = () => {
    signOut({ redirect: true });
  };

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } relative h-full border-t-[1px] bg-[#F8F9FA] pl-5 pr-6 pt-4 duration-300`}
      >
        <div className="flex h-full flex-col justify-between">
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300  ${
                  pathname == Menu.route ? "bg-white" : "bg-transparent"
                }
                  "",
                )} hover:bg-white 
              `}
                onClick={() => handleClickNavigation(Menu.route)}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                  {Menu.icon}
                </div>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left font-semibold text-[#0D0A2C]
duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
          <div className="px-2">
            <li
              className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 hover:bg-white 
            `}
              onClick={handleClickLogout}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <LuLogOut size={18} className="text-white" />
              </div>
              <span
                className={`${
                  !open && "hidden"
                } origin-left font-semibold text-[#0D0A2C]
duration-200`}
              >
                Sair da conta
              </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
