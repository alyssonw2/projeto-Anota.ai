import axios from 'axios';
import FormData from 'form-data'
export const getTokenEmpresa = async (whatsappempresa,tokenAtualConectado,TokenBear)=>{
    var data = new FormData();
    data.append('whatsappEmpresa', whatsappempresa);
    data.append('', '');

    var config = {
        method: 'post',
        url: 'https://api.mistercheff.com.br/v1/GetTokenEmpresa',
        headers: { 
          'Token': tokenAtualConectado, 
          'Authorization': TokenBear, 
          ...data.getHeaders()
        },
        data : data
      };

   await axios(config)
    .then(function (response) {
        console.log(response.data)
     return response.data
    })
    .catch(function (error) {
        console.log(error)
     return error
    });
}

