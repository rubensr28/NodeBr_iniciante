//npm install mongoose
const Mongoose = require('mongoose');
Mongoose.connect('mongodb://rubens:senha123@localhost:27017/herois', {useNewUrlParser:true}, function(error){
    if(!error) return;
    console.log('Falha na conexão ', error);
});

const connection = Mongoose.connection;

connection.once('open', ()=>{console.log('database rodando')} );
const state = connection.readyState;
console.log('state', state);
/*
0 - Disconectado
1 - Conectando
2 - Conectado
3 - Disconectando
 */

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

const model = Mongoose.model('herois', heroiSchema);

async function main(){
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'Dinheiro'
    });
    console.log('resultCadastrar', resultCadastrar);
    const listItens = await model.find();
    console.log('itens ', listItens);
}
main()