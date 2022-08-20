import axios from 'axios';
import FormData from 'form-data'
export const GetDadosEmpresa = async (whatsappClient,tokenAtualConectado,TokenBear)=>{
    var data = new FormData();
data.append('whatsappCliente', whatsappClient);

var config = {
  method: 'post',
  url: 'https://api.mistercheff.com.br/v1/Getdados',
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

GetDadosEmpresa('+555584184660','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')