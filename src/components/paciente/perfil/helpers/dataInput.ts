export type Input = {
  fieldName: string;
  label: string;
  required: boolean;
};

export type DataInput = Input[];

export const dataInputs: DataInput = [
  {
    label: "Nome",
    required: true,
    fieldName: "nome",
  },
  {
    label: "Email",
    required: true,
    fieldName: "email",
  },
  {
    label: "CPF",
    required: true,
    fieldName: "documento",
  },
  {
    label: "Telefone",
    required: true,
    fieldName: "telefone",
  },
];
