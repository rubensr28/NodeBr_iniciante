const {
    readFile
} = require('fs');

const {
    promisify
} = require('util');

// transformando callback em promise
const readFileAsync = promisify(readFile);

//outra forma de obter dados do json
//const dadosJson = require('./herois.json');

class Database {

    constructor(){
        this.NOME_ARQUIVO = 'herois.json';
    }

    async obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO,'utf8');
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo(){

    }

    async listar(id){
        const dados = await this.obterDadosArquivo();
        const dadosFiltrados = dados.filter(item => (id? item.id : true)); 
        return dadosFiltrados;
    }

}

//export da instancia
module.exports = new Database();