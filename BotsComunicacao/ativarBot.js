import axios from 'axios';
import FormData from 'form-data'
export const AtivarBot = async (palavras,tokenAtualConectado,TokenBear)=>{
    
    var data = new FormData();
    data.append('whatsappEmpresa', '+5511980736253');
    data.append('whatsappID', '+5555984184660');
    
    var config = {
      method: 'post',
      url: 'https://api.mistercheff.com.br/v1/ativarbotpara',
      headers: { 
        'Token': '0453d902-4f0c-4415-ad90-0b6f6dd68fdb', 
        'Authorization': 'Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c', 
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

AtivarBot('Bom','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')