import axios from "axios";
export const Logica = async (remoteJid,texto,pushName)=>{
    console.log([
        remoteJid,
        texto,
        pushName
    ])
    
    if (JSON.stringify(texto).indexOf('Oi') != -1) {
        const options = {
            method: 'POST',
            url: 'http://192.168.2.128:3000/chats/send',
            params: {id: 'sessao1'},
            headers: {'Content-Type': 'application/json'},
            data: {
              id: 'sessao1',
              receiver: remoteJid,
              message: {
                text: 'Olá '+pushName+' Bom dia !',
                footer: 'Vou iniciar o seu atendimento.',
                buttons: [
                  {buttonId: 'id1', buttonText: {displayText: 'Acompanhar pedido'}, type: 1},
                  {buttonId: 'id2', buttonText: {displayText: 'Ver cardápio'}, type: 1}
                ],
                headerType: 1
              }
            }
          };
          
         await axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }
    if(JSON.stringify(texto).indexOf("selectedButtonId: 'id2'") != -1){
        const options = {
            method: 'POST',
            url: 'http://192.168.2.128:3000/chats/send',
            params: {id: 'sessao1'},
            headers: {'Content-Type': 'application/json'},
            data: {  receiver: remoteJid, message: {text: 'segue nosso link do cardápio \n\r https://www.google.com'}}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }
    if(JSON.stringify(texto).indexOf("selectedButtonId: 'id1'") != -1){
        const options = {
            method: 'POST',
            url: 'http://192.168.2.128:3000/chats/send',
            params: {id: 'sessao1'},
            headers: {'Content-Type': 'application/json'},
            data: {  receiver: remoteJid, message: {text: 'Otimo  '+pushName+ 'seu pedido encontra na fila para entrega'}}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }
 
}