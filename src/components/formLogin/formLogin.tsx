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
      <div className="mt-6 flex flex-col gap-4 max-sm:mt-2">
        <div>
          <Input
            type="email"
            label="Email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && (
            <span className="pl-2 text-xs text-red-500">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div>
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password && (
            <span className="pl-2 text-xs text-red-500">
              {errors.password?.message}
            </span>
          )}
        </div>
        <Button type="submit" loading={loading}>
          Entrar
        </Button>
        <BtnGoogle onClick={() => signIn("google")} />

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
    </form>
  );
};

export default FormLogin;
