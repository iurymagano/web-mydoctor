import { Avatar, AvatarImage } from "./avatar";
import { Card } from "./card";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <Card className="flex items-center justify-between rounded-none border-none bg-[#F8F9FA] px-6 shadow-none">
      <h1 className=" my-0  text-[32px] font-bold text-primary">MYDOCTOR</h1>
      <div className="flex items-center gap-4">
        <CiSettings size={24} className="text-[#7A8699]" />
        <IoIosNotificationsOutline size={24} className="text-[#7A8699]" />
        <Avatar className="h-8 w-8">
          <AvatarImage
            className="object-cover"
            src={
              "https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_1400x540.jpg.webp"
            }
          />
        </Avatar>
      </div>
    </Card>
  );
};

export default Header;
