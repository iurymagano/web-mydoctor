"use client";

import { fetchData } from "@/data/fetchData";
import { usePacienteStore } from "@/store/pacienteStore";
import { Paciente } from "@/types";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthPaciente = () => {
  const { paciente, update } = usePacienteStore();
  const { data: session } = useSession() as any;
  useEffect(() => {
    async function getPaciente() {
      if (session && !paciente.id) {
        console.log(session);
        const data = { id: session.typeUsuario.id };
        const resp = await fetchData({
          token: session.token,
          data,
          path: "search/id/pacientes",
        });
        const paciente: Paciente = { ...resp.respData, token: session.token };
        update(paciente);
      }
    }

    getPaciente();
  }, [session]);

  return null;
};

export default AuthPaciente;
