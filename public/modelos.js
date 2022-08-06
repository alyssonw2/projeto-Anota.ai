const M = {
    async conectarWhatsap() {
      let html = await axios.get("./modelos/conectarWhatsap/index.html");
      html = html.data;
      return html;
    },
    async novoGrupo() {
      let html = await axios.get("./modelos/novoGrupo/index.html");
      html = html.data;
      return html;
    },
    async whatsappBanidos() {
      let html = await axios.get("./modelos/whatsappBanidos/index.html");
      html = html.data;
      return html;
    },
    async offcanvas() {
      let html = await axios.get("./modelos/offcanvas/index.html");
      html = html.data;
      return html;
    },
    async offcanvasListas() {
      let html = await axios.get("./modelos/offcanvasListas/index.html");
      html = html.data;
      return html;
    },
    async anotaai() {
      let html = await axios.get("./modelos/anotaai/index.html");
      html = html.data;
      return html;
    },
    async chat() {
      let html = await axios.get("./modelos/chat/index.html");
      html = html.data;
      return html;
    },
    async notificacao(DATA,TEXTO) {
      let html = await axios.get("./modelos/notificacao/index.html");
      html = html.data;
      html = html.replace("{{DATA}}",DATA)
      html = html.replace("{{TEXTO}}",TEXTO)
      return html;
    }
  };