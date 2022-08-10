const socket = io("http://ajdev.ddns.net:3000");
socket.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
// client-side
socket.on("connect", () => {
console.log(socket.id); // x8WIv7-mJelg7on_ALbx
$('#Wconectado')[0].hidden = false
$('#NumeroConectado')[0].innerHTML = 'Conectado'
});

socket.on("updateqr",r=>{
    if(r?.message == 'Conectado'){
        F.Mensagem("Conectado");
    }
    console.log(r)
})

socket.on("messageNotify",async r =>{
        await F.Mensagem("Nova mensagem de "+ r.messages[0].pushName)
        console.log(r)
})

localStorage.notificarnovaMensagem = true