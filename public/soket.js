let soketLocal = io("http://localhost:4000");

soketLocal.on("connection", r => {
    console.log('socket servidor *Interno* conectado:'+r.id); // x8WIv7-mJelg7on_ALbx
});
// client-side
soketLocal.on("connect", r => {
   // console.log('socket servidor *Interno* conectado:'+r.id); // x8WIv7-mJelg7on_ALbx
});

//Qrcode -------------------------------------------
soketLocal.on("updateqr", r => {
    $('#Wconectado')[0].hidden = false
    $('#NumeroConectado')[0].innerHTML = 'Conectado'
    if (r?.message == 'Conectado') {
        F.Mensagem("Conectado");
        
    }
    console.log(r)
})
//Notificação -------------------------------------------
soketLocal.on("messageNotify", async r => {
    await F.Mensagem("Nova mensagem de " + r.messages[0].pushName)
    console.log(r)
})
//Login -------------------------------------------
soketLocal.on("loginSistemRetorno", async r => {
    await F.Mensagem("Nova mensagem de " + r.messages[0].pushName)
    console.log(r)
})
soketLocal.on("ResponseLogin", async r =>{
    if(r.ret.access_token != undefined){
        localStorage.TokenAtualAcesso = r.ret.access_token
        N.Logado()
    }
})

async function VerificarLoginSoket(dados) {
    await soketLocal.emit("Login",dados)

}


localStorage.notificarnovaMensagem = true