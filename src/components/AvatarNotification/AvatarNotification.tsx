import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProps {
  src?: string;
  className?: string;
}

export const AvatarNotification = ({ src, className }: AvatarProps) => {
  const imageDefault =
    "https://st4.depositphotos.com/3864435/27060/i/450/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg";
  const image = src || imageDefault;

  return (
    <div className="relative cursor-pointer rounded-[50%] border-[2px] border-[#74768bb0]">
      <div className="absolute right-0 top-[-2px] z-10 flex h-[10px] w-[10px] items-center justify-center rounded-[50%] bg-red-500">
        <div className=" h-1 w-1 self-center rounded-[50%] bg-white"></div>
      </div>

      <Avatar className={`h-8 w-8 ${className}`}>
        <AvatarImage className="h-full w-full object-cover" src={image} />
        <AvatarFallback>photo</AvatarFallback>
      </Avatar>
    </div>
  );
};
