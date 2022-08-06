const N = {
    async loading() {
        $("body")[0].innerHTML = await P.Loading();
        setTimeout(async () => {
         await this.Logado();
        }, 500);
    },
    async Logado() {
      $("body")[0].innerHTML = await P.Logado()
      $("#Conteudo")[0].innerHTML = ''
      $("#Conteudo").append( await M.conectarWhatsap())
      $("#Conteudo").append( await M.offcanvas())
      await FW.whatsappConectado()
      await FW.conectWhatsapp()

    },
    async anotaai(){
      $("#Conteudo")[0].innerHTML = ''
      $("#Conteudo").append( await M.anotaai())
      
      
    },
    async Login() {
      $("body")[0].innerHTML = await P.Login()
    },
    async chat(){
      $("#Conteudo")[0].innerHTML = ''
      $("#Conteudo").append( await M.chat())
    }
  };