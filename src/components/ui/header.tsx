import { Card } from "./card";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { AvatarNotification } from "../AvatarNotification/AvatarNotification";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Card className="flex items-center justify-between rounded-none border-none bg-[#F8F9FA] px-6 shadow-none">
      <h1 className=" my-0  text-[32px] font-bold text-primary">MYDOCTOR</h1>
      <div className="flex items-center gap-4">
        <CiSettings
          size={24}
          className="cursor-pointer text-[#7A8699] hover:animate-spin hover:text-[--primary] "
        />
        <IoIosNotificationsOutline
          size={24}
          className="cursor-pointer text-[#7A8699] transition hover:text-[--primary]"
        />
        <AvatarNotification src={session.image} />
        <span>{session.nome}</span>
      </div>
    </Card>
  );
};

export default Header;
