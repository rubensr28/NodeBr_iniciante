const ICrud = require('./interfaces/interfaceCrud');

class Postgres extends ICrud {
    constructor(){
        super();
    }
    create(item){
        console.log("item salvo no Postgres");
    }
}

module.exports = Postgres;