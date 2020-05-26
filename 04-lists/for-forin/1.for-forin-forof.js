const service = require('./service');

async function main(){
    try{
        const result = await service.obterPessoas('a');
        const names = [];

        // 3 tipos de for
        console.time('tempo for')
        for(let i=0 ; i<= result.results.length - 1; i++){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('tempo for')

        console.time('tempo forin')
        for (let i in result.results){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('tempo forin')

        console.time('tempo forof')
        for (const pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.timeEnd('tempo forof')



        console.log('names: ', names);
    }catch(error){
        console.log('erro: ',error);
    }

}
main();