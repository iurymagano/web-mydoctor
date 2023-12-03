import { MdEdit } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Perfil from "../perfil";

export const data = [
  {
    value: "perfil",
    text: "Editar Perfil",
    icon: <MdEdit />,
    content: <Perfil />,
  },
  {
    value: "notificacoes",
    text: "Notificações",
    icon: <IoMdNotifications />,
    content: <div>Notificacoes</div>,
  },
];
