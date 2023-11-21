import { z } from "zod";

export const createUserFormSchema = z
  .object({
    nome: z.string().min(1, { message: "Nome obrigatório" }),
    email: z.string().email("Formato de e-mail invalido"),
    password: z
      .string()
      .min(6, "A senha precisa de no minimo 6 caracteres")
      .regex(/[~!@#\$%\^&\*\(\)_+\-\[\]{}|':,./<>?]/, {
        message:
          "A senha deve conter caracteres não alfanuméricos ~!@#$%^&*()_+-[]{}|':,./<>?",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem coincidir.",
    path: ["confirmPassword"],
  });
