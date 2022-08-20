import axios from 'axios';
import FormData from 'form-data'
export const getStatusPedido = async (whatsappempresa,tokenAtualConectado,TokenBear)=>{
    var data = new FormData();
        data.append('whatsappCliente', whatsappempresa);

        var config = {
        method: 'post',
        url: 'https://api.mistercheff.com.br/v1/StatusPedido',
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

getStatusPedido('+5555984184660','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')