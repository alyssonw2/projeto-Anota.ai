
// Interpretador de dados  as mensagens vai ser enviada para 
//  Aqui fica a logica dos das interpretações dos dados 
import { SoketServico_Interno } from './websoket.js'

import { io } from "socket.io-client";
import axios from "axios";
import localStorage from 'local-storage';
import  {db} from './lowdb.js'
const ip = 'http://54.88.245.208:3002/'
 const socketServidorExterno = io(ip);
let idEmpresa = 'não tem id'
  export const Interpretador = async (m) => {
      SoketServico_Interno.emit("messageNotify", m)
    // console.log(m)
      if (m.type == 'notify') {
          await F.GetPalavras(m)
      }
  }
 export  const F = {
      async GetPalavras(dados) {
          console.log(dados)
          await db.read()
          let idEmpresa = db.data.idEmpresaLogin 
          let dadosKey = {
            "dados": dados,
            "idEmpresa": idEmpresa
          }
          socketServidorExterno.emit("Getdados",dadosKey)
      },
      async Send(dados){
          console.log(dados)
      },
      async Login(dados){
        socketServidorExterno.emit("Login",dados)
        idEmpresa = dados.token
        await db.read()
        db.data.idEmpresaLogin = dados.token
        await db.write()
       // localStorage.idempresa = dados.token
      }
  }
  // server-side  
  socketServidorExterno.on("connection", (dados) => {
   localStorage.soketID=dados.id; // x8WIv7-mJelg7on_ALbx
  });
  // client-side
  socketServidorExterno.on("connect", () => {
    console.log(socketServidorExterno.id); // x8WIv7-mJelg7on_ALbx
    localStorage.soketID=socketServidorExterno.id; // x8WIv7-mJelg7on_ALbx
    console.log('socket servidor Externo conectado:'+localStorage.soketID)
  });
  socketServidorExterno.on("disconnect", () => {
    console.log(socketServidorExterno.id); // undefined
  });
  socketServidorExterno.on("Send", async (dados) => {
    
    

    const options = {
      method: 'POST',
      url: 'http://localhost:4000/chats/send',
      params: {id: 'sessao1'},
      headers: {'Content-Type': 'application/json'},
      data: dados
    };

    await axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  });
  socketServidorExterno.on("ResponseLogin",(dados)=>{
    SoketServico_Interno.emit("ResponseLogin",dados)
    console.log(localStorage.idempresa)
  })
  socketServidorExterno.on("getTokenEmpresa", dados =>{
    console.log(dados)
   // getTokenEmpresa('+5511980736253','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')
  })
 

  

