/*
Obter um usuario 
Obeter o numero de telefone de um usuario a partir de seu ID
Obter o endereço
*/




function obterUsuario(callback){
    setTimeout( function (){
        return callback(null,{
            id:1,
            nome:"Aladin",
            dataNascimento: new Date()
        })
    }, 1000);

}

function obterTelefone(idUsuario,callback){
    setTimeout(()=>{
        return callback(null,{
            numero:"90292929",
            ddd:11
        })

    },2000)

}
function obterEndereco(idUsuario, callback){
    setTimeout(()=>{
        return callback(null,{
            rua:"dos bobos",
            numero:0
        })
    },2000)

}

obterUsuario( function resolverUsuario(error,usuario){
    if(error){
        console.error("Deu Ruim em Usuario",erro);
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error,telefone){
        if(error){
            console.error("Deu Ruim em Telefone",erro);
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(erro2,endereco){
            if(erro2){
                console.error("Deu ruim em Endereco",erro)
                return;
            }
            console.log(`
            Nome: ${usuario.nome},
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: ${telefone.ddd}, ${telefone.numero}`);

        }
    )})


})
//const telefone = obterTelefone(usuario.id);


//console.log("telefone", telefone);