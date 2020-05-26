const { get } = require ('axios');

const URL = 'https://swapi.dev/api/people';

async function obterPessoas(nome){
    const result = await get(`${URL}/?search=${nome}&format=json`);
    //console.log(JSON.stringify(result.data));
    return result.data.results.map(mapearPessoa);
}

function mapearPessoa(item){
    return {
        nome : item.name,
        peso: item.height
    }
}

module.exports = {
    obterPessoas
}