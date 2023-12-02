import { Paciente } from "@/types";
import { create } from "zustand";

type PacienteStore = {
  paciente: Paciente;
  update: (paciente: Paciente) => void;
};

export const usePacienteStore = create<PacienteStore>()((set) => ({
  paciente: {},
  update: (paciente: Paciente) =>
    set((state) => ({
      paciente: { ...state.paciente, ...paciente },
    })),
}));
