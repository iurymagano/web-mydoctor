"use client";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
// import Icon from "@/assets/svg/teammedical.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("dashboard");
  };

  return (
    <div className="h-full w-full">
      <div style={{ margin: "0 auto" }} className="h-full max-w-6xl px-6">
        <div className="flex h-full w-full items-center pb-12">
          <div className="flex w-full  items-center gap-32 max-lg:gap-16 ">
            <div className="flex min-w-fit flex-1 flex-col gap-4">
              <span className="text-center text-5xl font-semibold max-md:text-4xl">
                Acessar Conta
              </span>
              <span className="text-center text-base  max-md:text-sm">
                Agende sua consulta com facilidade agora
              </span>
              <div className="mt-6 flex flex-col gap-4">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Digite seu email"
                />
                <Input
                  type="password"
                  label="Senha"
                  placeholder="Digite sua senha"
                />
                <Button onClick={handleLogin}>Entrar</Button>
                <Button className="gap-4 bg-white text-slate-600 shadow">
                  <FcGoogle size={32} /> Sign in with Google
                </Button>
                <Link
                  href="/recoverpwd"
                  className="text-center"
                  style={{ textDecoration: "underline" }}
                >
                  Esqueceu sua senha?
                </Link>

                <Link href="/newuser" className="text-center">
                  Não possuo conta!
                  <strong
                    style={{ textDecoration: "underline" }}
                    className="ml-1 font-normal"
                  >
                    Criar conta.
                  </strong>
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

export default FormLogin;
