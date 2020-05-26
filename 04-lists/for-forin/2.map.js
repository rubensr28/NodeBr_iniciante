const service = require('./service');

Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = [];
    for(let indice = 0; indice <= this.length - 1; indice++){
        const resultado = callback(this[indice],indice);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}

async function main(){
    try {
        const results = await service.obterPessoas('a');
        let names =[];
        //1
        // results.results.forEach(pessoa => {
        //     names.push(pessoa.name);
        // });
        //2
        // names = results.results.map( (pessoa)=>pessoa.name)
        

        names = results.results.meuMap(function(pessoa,indice){
            return `${indice} : ${pessoa.name}`;
        });
        console.log('names: ', names);
        
    } catch (error) {
        console.error('erro: ',error)     
    }
}
main();