const F = {
  async Login() {
    let token = document.querySelector("#email");
    if (token.value == "") {
      await F.Mensagem("Campo token em branco");
      return;
    }
    let dados = {
      "token": token.value
    }
   
   await VerificarLoginSoket(dados)
  
  },
  async Render(componenteId, html) {
    document.querySelector(`${componenteId}`).innerHTML = `${html}`;
  },
  async DB(query, database) {
    const options = {
      method: "POST",
      url: "http://ajdev.ddns.net:7887/query",
      headers: { "Content-Type": "application/json" },
      data: {
        query,
        database,
      },
    };
    return await axios
      .request(options)
      .then((retorno) => {
        return retorno.data;
      })
      .catch((erro) => {
        return erro;
      });
  },
  async Mensagem(Mensagem, position, duration) {
    const toast = document.createElement("ion-toast");
    toast.message = Mensagem;
    toast.duration = duration || 2000;
    toast.position = position || 'top';


    document.body.appendChild(toast);
    return toast.present();
  },
  async Toast(Mensagem, position, duration) {
    const toast = document.createElement('ion-toast');
    toast.message = Mensagem;
    toast.icon = 'information-circle',
      toast.position = position || 'top';

    document.body.appendChild(toast);
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  },
  async VErificandoLogado(){
    if(localStorage.TokenAtualAcesso == undefined){
      N.Login()
    }else{
      N.Logado()
    }
  },
  async Logout() {
    localStorage.clear();
    await F.VErificandoLogado();
  },
  async chat() {
    if ($('#ms-menu-trigger')[0]) {
      $('body').on('click', '#ms-menu-trigger', function () {
        $('.ms-menu').toggleClass('toggled');
      });
    }
  }
};
let dadossuarioLogado = {
  dados: "",
  quantidadedados: 0,
  listasTransmicao: [],
  nome: "",
  email: "",
  whatsapp: "",
  paginacao: 10,
  gruposWhatsapp: [],
  categoriasGrupos: [
    "Beleza",
    "Mercado",
    "iPhones ",
    "Calçados",
    "Viagem ",
    "Geral",
  ],
  whatsappStatus: "",
  whatsappsBanidos: [],
  Fila: [],
  historicoEnviadas: [],
  Participantes: [],
  Destinatarios: [],
  boot: "bot25",
  porta: "3025",
  token: "DSAKjkjnmkdswa3456dsa3ad",
  Contatos: [],
  NaoContatos: [],
  traducaoPT: {
    "bJQueryUI": true,
    "oLanguage": {
      "sProcessing": "Processando...",
      "sLengthMenu": "Mostrar _MENU_ registros",
      "sZeroRecords": "Não foram encontrados resultados",
      "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
      "sInfoEmpty": "Mostrando de 0 até 0 de 0 registros",
      "sInfoFiltered": "",
      "sInfoPostFix": "",
      "sSearch": "Buscar:",
      "sUrl": "",
      "oPaginate": {
        "sFirst": "Primeiro",
        "sPrevious": "Anterior",
        "sNext": "Seguinte",
        "sLast": "Último"
      }
    }
  }

};
const FW = {
  async conectWhatsapp() {
    await F.Mensagem('Conectando ao whatsapp...')
    const options = {
      method: 'POST',
      url: '../sessions/add',
      headers: { 'Content-Type': 'application/json' },
      data: { id: 'sessao1', isLegacy: false }
    };
    return await axios
      .request(options)
      .then(async (response) => {
        await F.Mensagem('Whatsapp conectado ')
        dadossuarioLogado.StatusWhatsapp = response.data
        if (response.data.data.length != 0) {
          $('#QrcodeWhatsapp')[0].hidden = false
          $('#qrcodeAtual')[0].src = response.data.data.qr
        }
        return response;
      })
      .catch(async (error) => {
        await F.Mensagem('Erro ao conectar com server Whatsapp')
        return error;

      });
  },
  async DesconectarWhatsapp() {
    const options = {
      method: 'DELETE',
      url: '../sessions/status/sessao1',
      headers: { 'Content-Type': 'application/json' }
    };
   return await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  },
  async whatsappConectado() {
    const options = {
      method: 'GET',
      url: '../sessions/status/sessao1',
      headers: { 'Content-Type': 'application/json' }
    };
    await axios.request(options).then(function (response) {
      console.log(response)
      if (response.data.data.status == 'authenticated') {
        $('#Wconectado')[0].hidden = false
        $('#NumeroConectado')[0].innerHTML = 'Conectado'
      }
      return response.data
    }).catch(function (error) {
      console.log(error)
      return error
    });
  },
  async OpenWhatsW() {
    window.open('https://web.whatsapp.com/', '', 'height=800, width=600, left=' + (window.innerWidth - 600) / 2);
  },
  
}


//$('._21nHd > span:nth-child(1)').title