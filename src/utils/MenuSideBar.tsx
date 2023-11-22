import { BsFillChatDotsFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { MdDataThresholding } from "react-icons/md";

export const MenuSideBarProfissional = [
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
    title: "Mensagens",
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
export const MenuSideBarPaciente = [
  {
    title: "Profissionais",
    icon: <HiHome size={20} className="text-white" />,
    route: "/profissionais",
  },
  {
    title: "Mensagens",
    icon: <BsFillChatDotsFill size={18} className="text-white" />,
    route: "/mensagens",
  },
];
