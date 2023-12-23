"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePacienteStore } from "@/store/pacienteStore";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3333");
const Mensagens = () => {
  const { paciente, update } = usePacienteStore();
  const [mensagens, setMensagens] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("connection", {
      teste: "teste",
    });
    socket.emit(
      "selected_user",
      {
        profissional_id: 2,
        paciente_id: 2,
      },
      (data: any) => {
        console.log(data);
        setMensagens(data);
      },
    );
    socket.on("message", (data) => {
      console.log(data);
      //@ts-ignore
      const findMessage = mensagens.some((item) => item.id === data.id);
      if (!findMessage) {
        //@ts-ignore
        setMensagens((prev: object) => [...prev, data]);
      }
    });
  }, []);

  /**
 * 
 * 	"profissional_id": 2,
	"paciente_id": 2,
	"usuarioID": 6
}
 */

  const handleSendMessage = () => {
    console.log("entrou");

    socket.emit("message", {
      conteudo: message,
      profissional_id: 2,
      paciente_id: 2,
      usuarioID: 6,
    });
    setMessage("");
  };
  return (
    <div id="msg" className="flex h-full flex-col justify-between gap-4">
      <div>
        {paciente.usuario_id &&
          mensagens.map((item: any) => {
            if (item.usuarioID === paciente.usuario_id) {
              return (
                <div
                  key={item.id}
                  className="flex w-full justify-end text-green-400"
                >
                  {item.conteudo}
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className="flex w-full justify-start text-red-400"
                >
                  {item.conteudo}
                </div>
              );
            }
          })}
      </div>
      <div className="flex items-center gap-4">
        <Input setValue={({ value }: any) => setMessage(value)} />
        <Button onClick={handleSendMessage}>Enviar</Button>
      </div>
    </div>
  );
};

export default Mensagens;
