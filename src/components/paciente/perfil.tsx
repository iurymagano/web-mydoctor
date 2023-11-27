import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AvatarProfile } from "../ui/avatar";
import Banner from "../ui/banner";
import { getServerSession } from "next-auth";
import UploadImage from "../ui/uploadImage";

const Perfil = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex w-full flex-col">
      <Banner />
      <div className="flex px-6">
        <AvatarProfile
          className="mt-[-40px] h-28 w-28 rounded-lg"
          src="https://img.freepik.com/fotos-premium/sorriso-de-retrato-e-homem-com-confianca-positiva-e-despreocupado-contra-um-fundo-de-estudio-cinza-enfrentar-pessoa-do-sexo-masculino-e-humano-com-uma-atitude-alegre-liberdade-e-modelo-com-alegria-canada-e-relaxar_590464-177008.jpg"
        />
        <div className=" ml-2 flex flex-col items-start justify-start self-center">
          <span className="ml-2 text-2xl font-semibold text-[--primary]">
            {session.nome}
          </span>
          <span className="ml-2  text-base ">{session.email}</span>
        </div>
      </div>
      <UploadImage />
    </div>
  );
};

export default Perfil;
