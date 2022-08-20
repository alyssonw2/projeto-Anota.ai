import axios from 'axios';
import FormData from 'form-data'
export const getLocaisEntrega = async (Lat,Lng,tokenAtualConectado,TokenBear)=>{
    var data = new FormData();
    data.append('Lat', Lat);
    data.append('Lng', Lng);
    
    var config = {
      method: 'post',
      url: 'https://api.mistercheff.com.br/v1/LocaisEntrega',
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

getLocaisEntrega('-29.705537','-51.125125','0453d902-4f0c-4415-ad90-0b6f6dd68fdb','Bearer 8dcaedc530e15c474d64df6b7feb2654056ef55c')