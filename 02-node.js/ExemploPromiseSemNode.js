/*
Obter um usuario 
Obeter o numero de telefone de um usuario a partir de seu ID
Obter o endereço
*/




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
function obterEndereco(idUsuario){
    return new Promise(function resolveEndereco(resolve,reject){

        setTimeout(()=>{
            return resolve({
                rua:"dos bobos",
                numero:0
            })
        },2000)
    })

}

const usuarioPromise = obterUsuario();
usuarioPromise
    .then(function (usuario){
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return{
                usuario:{
                    nome: usuario.nome,
                    id: usuario.id,
                },
                telefone:result
            }
        })
    })
    .then(function (resultado) {
        console.log('resultado: ', resultado)

    }).catch(function (erro) {
        console.error("Deu Ruim", erro)
    });



// obterUsuario( function resolverUsuario(error,usuario){
//     if(error){
//         console.error("Deu Ruim em Usuario",erro);
//         return;
//     }
//     obterTelefone(usuario.id,function resolverTelefone(erro1,telefone){
//         if(error){
//             console.error("Deu Ruim em Telefone",erro1);
//             return;
//         }
//         obterEndereco(usuario.id,function resolverEndereco(erro2,endereco){
//             if(erro2){
//                 console.error("Deu ruim em Endereco",erro2)
//                 return;
//             }
//             console.log(`
//             Nome: ${usuario.nome},
//             Endereço: ${endereco.rua}, ${endereco.numero}
//             Telefone: ${telefone.ddd}, ${telefone.numero}`);

//         }
//     )})


// })