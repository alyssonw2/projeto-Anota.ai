const P = {
    async Logado() {
      let html = await axios.get("./paginas/logado/index.html");
      html = html.data;
      return html;
    },
    async Loading() {
      let html = await axios.get("./paginas/loading/index.html");
      html = html.data;
      return html;
    },
    async Login() {
      let html = await axios.get("./paginas/login/index.html");
      html = html.data;
      return html;
    },
  };