
const {obterPessoas} = require('./service');
/* Object destructuring
 const user = {id: 42,is_verified: true};
const {id, is_verified} = user;
*/

Array.prototype.meuFilter = function(callback){
    const lista = [];
    for (const index in this) {
        const item = this[index];
        const result = callback(item, index, this);
        //0, "",null, undefined ==false
        if(!result) continue;
        lista.push(item);
    }
    return lista;
}

async function main(){
    try {
        const { results } = await obterPessoas('a');
        // const familiaLars = results.filter( (item) =>{
        //     // não encontrou, igual a menos 1
        //     return item.name.toLowerCase().indexOf('lars') !==-1;
        // })
        // const names = familiaLars.map( (pessoa) => pessoa.name)
        const familiaLars = results.meuFilter( (item,index,lista) =>{
            console.log(`index: ${index}`, lista.length);
            return item.name.toLowerCase().indexOf('lars') !== -1
        });

        const names = familiaLars.map( (pessoa) => pessoa.name)
        console.log('familia Lars: ',names);
    } catch (error) {
        console.error("erro: ", error)    
    }
}
main();