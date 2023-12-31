"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchData } from "@/data/fetchData";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import TeamMedical from "@/assets/gifs/Healthprofessionalteam.gif";
type UserProps = {
  email: string;
};

const RecoverPwd = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(
      z.object({
        email: z.string().email("Formato de e-mail invalido"),
      }),
    ),
  });

  const handleSendEmail = async ({ email }: UserProps) => {
    setLoading(true);
    const resp = await fetchData({ data: { email }, path: "sendchangepass" });

    if (resp?.error) {
      toast.error("Nenhum usuario encontrado com esse email");
      setLoading(false);
      return;
    }
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="h-full w-full">
      <div style={{ margin: "0 auto" }} className="h-full max-w-6xl px-6">
        <div className="flex h-full w-full items-center pb-12">
          <div className="flex w-full  items-center gap-32 max-lg:gap-16 ">
            {!success && (
              <div className="flex min-w-fit flex-1 flex-col gap-4">
                <span className="text-center text-4xl font-semibold max-md:text-2xl">
                  Esqueci minha senha
                </span>
                <form
                  onSubmit={handleSubmit(handleSendEmail)}
                  className="mt-6 flex flex-col gap-6"
                >
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Digite seu email"
                    sizeInput="lg"
                    {...register("email")}
                    msgErro={errors.email?.message}
                  />
                  <Button
                    size={"lg"}
                    type="submit"
                    className="mt-2"
                    loading={loading}
                  >
                    Enviar
                  </Button>

                  <Link
                    href="/"
                    className="text-center"
                    style={{ textDecoration: "underline" }}
                  >
                    Retornar para o Login
                  </Link>
                </form>
              </div>
            )}

            {success && (
              <div className="flex flex-col gap-6">
                <span className="text-center  text-lg font-medium max-md:text-2xl">
                  Foi encaminhado para seu email as instruções para alteração de
                  senha.
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
