"use client";

import Search from "@/components/search/search";
import CardProfissional from "@/components/ui/cardProfissional";
import { fetchData } from "@/data/fetchData";
import { usePacienteStore } from "@/store/pacienteStore";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Profissionais = () => {
  const { paciente } = usePacienteStore();
  const [respProfissional, setRespProfissional] = useState<any>([]);
  const [idsProfissionais, setIdsProfissionais] = useState([]);

  useEffect(() => {
    if (!respProfissional?.profissionais) {
      getProfissionais({});
    }
  }, [paciente]);

  const getProfissionais = async ({ page }: { page?: number }) => {
    const respLikes = await fetchData({
      path: "search/like/pacientes",
      data: { id: paciente.id },
      token: paciente.token,
    });
    if (!respLikes.error) {
      const idsProfissional = respLikes.respData.map((item: any) => item.id);
      setIdsProfissionais(idsProfissional);
    }

    const data: { skip?: number; take?: number } = { take: 12 };

    if (page) {
      const skip = page === 1 ? 1 : 10 * page + 2 - 10;
      data.skip = skip;
    }
    const resp = await fetchData({
      method: "POST",
      path: "search/profissional",
      token: paciente.token,
      data,
    });
    setRespProfissional(resp.respData);
  };

  const onChangePage = (page: number) => {
    getProfissionais({ page });
  };

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div>
        <Search />
        <div className="mt-4 flex h-full flex-wrap gap-6 overflow-auto">
          {respProfissional?.profissionais &&
            respProfissional.profissionais.map((profissional: any) => (
              <CardProfissional
                //@ts-ignore
                isActiveState={idsProfissionais.includes(profissional?.id)}
                id={profissional.id}
                key={profissional.id}
                nota={profissional.nota}
                name={profissional.nome}
                profissao={profissional.typeProfissional?.nome}
                image={profissional.image}
              />
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Pagination
          // isCompact
          page={1}
          showControls
          total={respProfissional?.totalPage || 0}
          initialPage={1}
          color="primary"
          onChange={onChangePage}
        />
      </div>
    </div>
  );
};

export default Profissionais;
