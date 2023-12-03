import { data } from "@/components/paciente/perfil/helpers/dataTabs";
import { Tabs } from "@/components/ui/tabs";

const PerfilPage = () => {
  return (
    <div className="flex h-full rounded-md bg-[#fafafa]">
      <Tabs data={data} current="perfil" />
    </div>
  );
};

export default PerfilPage;
