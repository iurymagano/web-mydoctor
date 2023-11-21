import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <div className="flex w-full items-center gap-2">
      <Input placeholder="Pesquise o profissional" className="max-w-xs" />
      <Button>Pesquisar</Button>
    </div>
  );
};

export default Search;
