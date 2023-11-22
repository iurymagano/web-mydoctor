"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [mensagens, setMensagens] = useState([]);
  const socket = io("http://localhost:3333");
  socket.emit("connection", {
    teste: "teste",
  });
  socket.emit("selected_user", {
    profissional_id: 13,
    paciente_id: 9,
  });

  socket.on("message", (data) => {
    console.log(data);
  });

  return <div>teste</div>;
};

export default Chat;
