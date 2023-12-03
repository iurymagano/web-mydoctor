import { isCPFValid } from "@/utils/getHash";
import { z } from "zod";

export const createFormPacienteSchema = z.object({
  nome: z.string().min(1, { message: "Nome obrigatório" }),
  email: z
    .string()
    .min(1, { message: "Email obrigátorio" })
    .email("Email inválido"),
  documento: z
    .string()
    .min(1, { message: "CPF é obrigatório" })
    .refine((value) => isCPFValid(value), {
      message: "CPF inválido",
    }),
  telefone: z.string().min(1, { message: "Telefone obrigatório" }),
});
