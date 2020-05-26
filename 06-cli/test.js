const {
    deepEqual,
    ok
} = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRADO = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

describe('Suite de manipulação de Herois', () =>{
    it('deve pesquisar um herói usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO;
        //destructor - pegando apenas a primeira posição do array
        const [resultado] = await database.listar(expected.id);
        deepEqual(resultado,expected);
    });

    // it('deve cadastrar um heroi, usando arquivos', async ()=>{
    //     const expected = DEFAULT_ITEM_CADASTRADO;

    //     ok(null,expected);
    // })

});