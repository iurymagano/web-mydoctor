"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import BtnGoogle from "../ui/btnGoogle";
import { ToastContainer, toast } from "react-toastify";

type UserProps = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(
      z.object({
        email: z.string().email("Formato de e-mail invalido"),
        password: z.string().min(1, "Digite sua senha"),
      }),
    ),
  });

  const router = useRouter();

  const handleLogin = async ({ email, password }: UserProps) => {
    if (!loading) {
      setLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        toast.error("email/password inválido");
        setLoading(false);
        return;
      }

      router.replace("/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex min-w-fit flex-1 flex-col gap-4 overflow-auto max-md:gap-2"
    >
      <span className="text-center text-4xl font-bold max-md:text-2xl ">
        Acessar Conta
      </span>
      <span className="text-center text-base  max-md:text-sm">
        Agende sua consulta com facilidade agora
      </span>
      <div className="mt-6 flex flex-col gap-6 max-sm:mt-2">
        <div>
          <Input
            type="email"
            label="Email"
            placeholder="Digite seu email"
            {...register("email")}
            sizeInput="lg"
            msgErro={errors.email?.message}
          />
        </div>
        <div>
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            sizeInput="lg"
            {...register("password")}
            msgErro={errors.password?.message}
          />
        </div>
        <Button type="submit" loading={loading} size="lg" className="mt-2">
          Entrar
        </Button>
        <BtnGoogle onClick={() => signIn("google")} size="lg" />

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
      <ToastContainer />
    </form>
  );
};

export default FormLogin;
