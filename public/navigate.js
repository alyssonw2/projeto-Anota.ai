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
    $("#Conteudo").append(await M.conectarWhatsap())
    $("#Conteudo").append(await M.offcanvas())
    await FW.whatsappConectado()
    await FW.conectWhatsapp()
  },
  async misterchef() {
    $("#Conteudo")[0].innerHTML = ''
    $("#Conteudo").append(await M.misterchef())
    $("#Conteudo").append(await M.offcanvas())
  },
  async Login() {
    $("body")[0].innerHTML = await P.Login()
  },
  async chat() {
    $("#Conteudo")[0].innerHTML = ''
    $("#Conteudo").append(await M.chat())
    $("#Conteudo").append(await M.offcanvas())
    $("#Conteudo").append(await M.conectarWhatsap())
    $("#Conteudo").append(await M.offcanvas())
    await FW.whatsappConectado()
    await FW.conectWhatsapp()
  },
  async mensagens() {
    $("#Conteudo")[0].innerHTML = ''
    $("#Conteudo").append(await M.mensagens())
    $("#Conteudo").append(await M.offcanvas())
  }
};