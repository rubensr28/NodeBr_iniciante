const ICrud = require('./interfaces/interfaceCrud');
const Mongoose = require('mongoose');
const STATUS = {
    0 : 'Disconectado',
    1 :'Conectando',
    2 :'Conectado',
    3 : 'Disconectando'
}

class MongoDB extends ICrud {
    constructor(){
        super();
        this._herois = null;
        this._driver = null;
    }
    defineModel(){
        const heroiSchema = new Mongoose.Schema({
            nome: {
                type: String,
                required: true
            },
            poder: {
                type: String,
                required: true
            },
            insertedAt: {
                type: Date,
                default: new Date()
            }
        })
        
        this._herois = Mongoose.model('herois', heroiSchema);
    }
    connect(){
        Mongoose.connect('mongodb://rubens:senha123@localhost:27017/herois', { useNewUrlParser: true }, function (error) {
            if (!error) return;
            console.log('Falha na conexão ', error);
        });
        const connection = Mongoose.connection;
        connection.once('open', ()=>{console.log('database rodando')} );

        this._driver = connection;

    }
    async isConnected(){
        const state = STATUS[this._driver.readyState]
        if(state === 'Conectado') return state;
        if(state !== 'Conectando') return state;           
        await new Promise(resolve => setTimeout(resolve,1000));
        return STATUS[this._driver.readyState];
    }
    async create(item){
        const resultCadastrar = await model.create({
            nome: 'Batman',
            poder: 'Dinheiro'
        });
        console.log("item salvo no mongoDB");
    }
}

module.exports = MongoDB;