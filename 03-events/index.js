const EventEmmitter = require('events');
class MeuEmissor extends EventEmmitter{
}

const meuEmissor = new MeuEmissor(); // manipulador de eventos
const nomeEvento = 'usuarioclick';

meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click)
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0;
// setInterval(function (){
//     meuEmissor.emit(nomeEvento, 'no ok ' + (count++))
// },1000)


// Funcionando sem promise
// const stdin = process.openStdin();
// stdin.addListener('data', function(value){
//     console.log(`Você digitou: ${value.toString().trim()}` )
// })

const stdin = process.openStdin();
function main(){
    return new Promise( function (resolve,reject) {
        stdin.addListener('data', function(value){
            //console.log(`Você digitou: ${value.toString().trim()}` )
            return resolve(value);
        })
    })
}
// promise executa apenas uma vez
main().then( function (resultado){
    console.log('resultado ', resultado.toString());
})