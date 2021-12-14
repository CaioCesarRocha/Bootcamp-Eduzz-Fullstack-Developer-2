// Exemplo de como lidar com programação assíncrona
const EventEmitter = require('event-emitter');

const emitter = new EventEmitter();

emitter.on('User logged', data =>{
    console.log(data)
});

emitter.emit('User logged', { user:'Italo Marques' })
