/*
Obter um usuario 
Obeter o numero de telefone de um usuario a partir de seu ID
Obter o endereço
*/


const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){

    return new Promise(function resolvePromise(resolve,reject){    
        setTimeout( function (){
            return resolve({
                id:1,
                nome:"Aladin",
                dataNascimento: new Date()
            })
        }, 1000);
    });

}

function obterTelefone(idUsuario){
    return new Promise(function resolverPromise(resolve,reject){

        setTimeout(()=>{
            return resolve({
                numero:"90292929",
                ddd:11
            })
            
        },2000)
        
    })
}
function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            rua:"dos bobos",
            numero:0
        })
    },2000)
}

async function main(){
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario();
        //const telefone = await obterTelefone(usuario.id);
        //const endereco = await obterEnderecoAsync(usuario.id)

        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1];
        const telefone = resultado[0];

        console.log(`
        Nome: ${usuario.nome}
        Telefone: ${telefone.ddd} ${telefone.numero}
        Endereco: ${endereco.rua}, ${endereco.numero} `)

        console.timeEnd('medida-promise')

    }catch(error){
        console.error('Deu Ruim: ', error)
    }
}
main()