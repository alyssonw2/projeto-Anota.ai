import axios from 'axios';
import FormData from 'form-data'
export const updateTokeEmpresa = async (whatsappempresa,tokenAtualConectado,TokenBear,Authorization)=>{
    
    var data = new FormData();
    data.append('whatsappEmpresa', whatsappempresa);
    data.append('UltimoTokenConectado', tokenAtualConectado);

    var config = {
    method: 'post',
    url: 'https://api.mistercheff.com.br/v1/UpdateToken',
    headers: { 
        'Token': TokenBear, 
        'Authorization': Authorization, 
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
     return error
    });
}

updateTokeEmpresa('+5511980736253','4d56as4d65','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')