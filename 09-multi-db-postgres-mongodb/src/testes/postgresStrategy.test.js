const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres());
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gavião arqueiro',
    poder: 'arco e flexa'
}

const MOCK_HEROI_ATUALIZAR = {
    nome: 'Super Homem',
    poder: 'Super Força'
}

describe('Portgres Strategy', function(){
    this.timeout(Infinity);
    this.beforeAll(async function (){
        await context.connect();
        await context.delete()
        await context.create(MOCK_HEROI_ATUALIZAR);
    })

    it('PostgreSQL Connection', async function(){
        const result = await context.isConnected();
        assert.equal(result,true);
    })

    it('Cadastrar', async function(){
        const result = await context.create(MOCK_HEROI_CADASTRAR);
        delete result.id;
        assert.deepEqual(result,MOCK_HEROI_CADASTRAR)
    })
    it('Listar', async function(){
        const [result] = await context.read({nome: MOCK_HEROI_CADASTRAR.nome});
        delete result.id;
        assert.deepEqual(result,MOCK_HEROI_CADASTRAR);
    })
    it('Atualizar', async function(){
        const [itemAtualizar] = await context.read({nome: MOCK_HEROI_ATUALIZAR.nome})
        //rest/spread - usado para concatenar ou separar objetos
        const novoItem = {
            ...MOCK_HEROI_ATUALIZAR, // quebra o objeto em chaver
            nome: 'Mulher Maravilha'
        }
        const result = await context.update(itemAtualizar.id, novoItem);
        const [itemAtualizado] = await context.read({id: itemAtualizar.id})
        assert.deepEqual(itemAtualizado.nome,novoItem.nome)
        assert.deepEqual(result, [1]);
    })
    it('Remover por id', async function(){
        const [item] = await context.read({});
        const result = await context.delete(item.id);
        assert.deepEqual(result, 1);

    })

})