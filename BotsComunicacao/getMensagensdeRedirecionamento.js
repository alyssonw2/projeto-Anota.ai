import axios from 'axios';
import FormData from 'form-data'
export const getMensagensDeRedirecionamento = async (palavras,tokenAtualConectado,TokenBear)=>{
    
    var data = new FormData();
    data.append('whatsappID', '+5555984184660');
    data.append('tipoResposta', 'cardapio');
    
    var config = {
      method: 'post',
      url: 'https://api.mistercheff.com.br/v1/Getmensagensdedirecionamento',
      headers: { 
        'Token': '0453d902-4f0c-4415-ad90-0b6f6dd68fdb', 
        'Authorization': 'Bearer a2ab08e8d052e516e4b2224d0f4ade60b1c1dda4', 
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

getMensagensDeRedirecionamento('Bom','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')