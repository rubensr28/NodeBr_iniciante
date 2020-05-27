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
const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'LAnterna Verde',
    poder: 'Energia do Anel',
    id:2
}

describe('Suite de manipulação de Herois', () =>{
    //deixar sempre 1 item na base
    before(async ()=> {
    //    await database.cadastrar(DEFAULT_ITEM_CADASTRADO);
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
    } )
    it('deve pesquisar um herói usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO;
        //destructor - pegando apenas a primeira posição do array
        const [resultado] = await database.listar(expected.id);
        deepEqual(resultado,expected);
    });

    it('deve cadastrar um heroi, usando arquivos', async ()=>{
        const expected = DEFAULT_ITEM_CADASTRADO;
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRADO);
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRADO.id)
        deepEqual(actual,expected);
    })
    it('deve remover um herói por id', async () =>{
        const expect = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRADO.id);
        deepEqual(resultado,expect);
    })
    it.only('deve atualizar um heroi pelo id', async()=>{
        const expect ={
            ...DEFAULT_ITEM_ATUALIZAR,
            nome:'Batman',
            poder:'Dinheiro'
        }
        const novoDado={
            nome:'Batman',
            poder:'Dinheiro'
        }
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado);
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);
        console.log('resultado',resultado)
        console.log('expext',expect)
        deepEqual(resultado,expect);
    })
});