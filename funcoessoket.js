import {SoketServico_Interno} from './websoket.js'
import {F} from './Interpretador.js'
SoketServico_Interno.on('connection', client => {
    console.log("--------------------------------")
    console.log("SoketServico_Interno conectado:"+client.id)
    
    client.on('mensagem', data => { 
        console.log(data)
    });
    client.on('Login', async data => { 
        console.log(data)
        console.log('Aqui ---------')
       await F.Login(data)
    });
});

