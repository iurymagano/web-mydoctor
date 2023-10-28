import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Icon from "@/assets/svg/teammedical.svg";
import Link from "next/link";
import CheckLabel from "@/components/ui/checkLabel";

const RecoverPwd = () => {
  return (
    <div className="h-full w-full">
      <div style={{ margin: "0 auto" }} className="h-full max-w-6xl px-6">
        <div className="flex h-full w-full items-center pb-12">
          <div className="flex w-full  items-center gap-32 max-lg:gap-16 ">
            <div className="flex min-w-fit flex-1 flex-col gap-2">
              <span className="text-center text-5xl font-semibold max-md:text-4xl">
                Crie sua conta
              </span>
              <span className="text-center text-base  max-md:text-sm">
                Agende sua consulta com facilidade agora
              </span>
              <div className="mt-4 flex flex-col gap-4">
                <CheckLabel label="Profissional" />
                <CheckLabel label="Paciente" />
                <Input type="text" label="Nome" placeholder="Digite seu nome" />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Digite seu email"
                />
                <Input
                  type="password"
                  label="senha"
                  placeholder="Digite sua senha"
                />
                <Input
                  type="password"
                  label="Confirme a senha"
                  placeholder="Digite sua senha"
                />
                <Button>Criar conta</Button>

                <Link
                  href="/"
                  className="text-center"
                  style={{ textDecoration: "underline" }}
                >
                  Voltar para Login
                </Link>
              </div>
            </div>
            <div className="w-full max-w-[537px] max-md:hidden">
              {/* <Icon /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPwd;
