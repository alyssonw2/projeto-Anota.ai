
// Interpretador de dados  as mensagens vai ser enviada para 
//  Aqui fica a logica dos das interpretações dos dados 
import { IOWEBSOKET } from './websoket.js'
const ip = "http://192.168.2.128:3002"
import { io } from "socket.io-client";
import axios from "axios";
const socket = io(ip);

export const Interpretador = async (m) => {
    IOWEBSOKET.emit("messageNotify", m)
   // console.log(m)
    if (m.type == 'notify') {
        await F.GetPalavras(m)
    }
}

const F = {
    async GetPalavras(dados) {
        console.log(dados)
        socket.emit("Getdados",dados)
    },
    async Send(dados){
        console.log(dados)
    }
}
// server-side
  socket.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
  
  // client-side
  socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
  
  socket.on("disconnect", () => {
    console.log(socket.id); // undefined
  });

  socket.on("Send", (dados) => {
    console.log(dados); // undefined
    const options = {
      method: 'POST',
      url: 'http://192.168.2.128:4000/chats/send',
      params: {"id": 'sessao1'},
      headers: {'Content-Type': 'application/json'},
      data: dados
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  });


  

