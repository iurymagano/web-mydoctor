import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Search from "@/components/search/search";
import CardProfissional from "@/components/ui/cardProfissional";
import { fetchData } from "@/data/fetchData";
import { getServerSession } from "next-auth";

const DashBoard = async () => {
  const { token } = await getServerSession(authOptions);
  const resp = await fetchData({ method: "GET", path: "profissional", token });
  return (
    <div className="flex flex-col gap-4">
      <Search />
      <div className="flex h-full flex-wrap gap-6 overflow-auto ">
        {!resp.error &&
          resp.respData &&
          resp.respData.map((profissional: any) => (
            <CardProfissional
              key={profissional.id}
              nota={profissional.nota}
              name={profissional.nome}
              profissao={profissional.typeProfissional?.nome}
              image={profissional.image}
            />
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
