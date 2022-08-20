import express, { json } from 'express'
import http from "http";
import { Server } from "socket.io";
const app = express()
app.use(express.json())
const Httpserver = http.createServer(app);
const SoketServico_Interno = new Server(Httpserver);
export {SoketServico_Interno,Httpserver,app}