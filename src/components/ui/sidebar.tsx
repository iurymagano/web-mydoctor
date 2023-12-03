"use client";

import { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface SideBarProps {
  menu: Array<MenuObj>;
}

interface MenuObj {
  title: string;
  icon: any;
  route: string;
}

const Sidebar = ({ menu }: SideBarProps) => {
  const [open, setOpen] = useState(false);
  const route = useRouter();
  const pathname = usePathname();

  const handleClickNavigation = (routePage: string) => {
    route.push(routePage);
  };

  const handleClickLogout = () => {
    signOut({ redirect: true });
  };

  return (
    <div className="flex pb-4 ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } relative h-full border-t-[1px] bg-[#F8F9FA] ${
          open ? "pl-5 pr-6" : "p-0"
        }  relative pt-4 duration-300`}
      >
        {open ? (
          <FaChevronCircleLeft
            className="absolute right-[-8px] top-[0px] cursor-pointer text-[--primary]"
            onClick={() => setOpen(false)}
          />
        ) : (
          <FaChevronCircleRight
            className="absolute right-[-8px] top-[0px] cursor-pointer text-[--primary]"
            onClick={() => setOpen(true)}
          />
        )}
        <div
          className={`flex h-full flex-col ${
            !open && "items-center"
          }  justify-between`}
        >
          <ul className="pt-6">
            {menu.map((Menu, index) => (
              <li
                key={index}
                className={`flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300  ${
                  pathname == Menu.route ? "bg-white" : "bg-transparent"
                }
               hover:bg-white 
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
