"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchData } from "@/data/fetchData";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import TeamMedical from "@/assets/gifs/Healthprofessionalteam.gif";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
type UserProps = {
  password: string;
  confirmPassword: string;
};

const RecoverPwd = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = searchParams.get("key");
    if (!token) {
      router.push("/");
      return;
    }

    setToken(token);
  }, [router, searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(
      z
        .object({
          password: z
            .string()
            .min(6, "A senha precisa de no minimo 6 caracteres")
            .regex(/[~!@#\$%\^&\*\(\)_+\-\[\]{}|':,./<>?]/, {
              message: "A senha deve conter caracteres especiais",
            }),
          confirmPassword: z.string(),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: "As senhas devem coincidir.",
          path: ["confirmPassword"],
        }),
    ),
  });

  const handleNewPass = async ({ password }: UserProps) => {
    setLoading(true);
    const resp = await fetchData({
      data: { password },
      path: "newpass",
      token,
    });

    if (resp.error) {
      setLoading(false);
      toast.error(
        "Expirou o tempo para alteração de senha. Envie o email novamente!",
      );
      return;
    }
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="h-full w-full">
      <div style={{ margin: "0 auto" }} className="h-full max-w-6xl px-6">
        <div className="flex h-full w-full items-center pb-12">
          <div className="flex w-full  items-center gap-32 max-lg:gap-16 ">
            {!success && (
              <div className="flex min-w-fit flex-1 flex-col gap-4">
                <span className="text-center text-4xl font-semibold max-md:text-2xl">
                  Alterar senha
                </span>
                <form
                  onSubmit={handleSubmit(handleNewPass)}
                  className="mt-6 flex flex-col gap-6"
                >
                  <Input
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha"
                    sizeInput="lg"
                    {...register("password")}
                    msgErro={errors.password?.message}
                  />
                  <Input
                    type="password"
                    label="Confirmação de senha"
                    placeholder="Confirme sua senha"
                    sizeInput="lg"
                    {...register("confirmPassword")}
                    msgErro={errors.confirmPassword?.message}
                  />
                  <Button
                    size={"lg"}
                    type="submit"
                    className="mt-2"
                    loading={loading}
                  >
                    Enviar
                  </Button>
                </form>
              </div>
            )}
            {success && (
              <div className="flex flex-col gap-6">
                <span className="text-center  text-2xl font-medium text-green-600 max-md:text-2xl">
                  Sua senha foi alterada com sucesso.
                </span>
                <Link
                  href="/"
                  className="text-center"
                  style={{ textDecoration: "underline" }}
                >
                  Retornar para o Login
                </Link>
              </div>
            )}
            <div className="w-full max-w-[537px] max-md:hidden">
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
      <ToastContainer />
    </div>
  );
};

export default RecoverPwd;
