import {io} from './websoket.js'
io.on('connection', client => {
    console.log(client.id)
    client.on('mensagem', data => { 
        console.log(data)
    });
});