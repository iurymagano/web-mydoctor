import FormNewUser from "@/components/formNewUser/formNewUser";
import Image from "next/image";
import TeamMedical from "@/assets/gifs/Healthprofessionalteam.gif";

const NewUser = () => {
  return (
    <div className="h-full w-full">
      <div style={{ margin: "0 auto" }} className="h-full max-w-6xl  px-6 ">
        <div className="flex h-full w-full items-center pb-12">
          <div className="flex w-full  items-center gap-14 max-lg:gap-16 max-sm:gap-0">
            <FormNewUser />
            <div className="w-full max-w-[537px]  max-md:hidden">
              <Image
                width={1}
                height={1}
                className="h-full w-full object-cover"
                src={TeamMedical}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
