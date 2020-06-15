docker ps //para pegar o id em que o mongo está 

// exemplo da aula que nao funcionou
docker exec -it bdd109e95baf  // -it <id>
    mongo -u admin -p admin --authenticationDatabase herois

// conectar no mongo via CLI
docker exec -it mongodb mongo --host localhost -u admin -p admin

// dentro do mongo
show dbs // mostra as databases
use herois // muda para a db herois
show collections // mostra as coleções

//insert
db.herois.insert(
    {
        nome:'Flash',
        poder:'Velocidade',
        dataNasciemnto: '1989-05-14'
    }
)
//select
db.herois.find()
db.herois.find().pretty()

// usando js no terminal do mongo
for (let i=0; i<=10; i++){
    db.herois.insert({
        nome:`Clone-${i}`,
        poder:'Velocidade',
        dataNasciemnto: '1989-05-14'
    })
}

//
db.herois.count();
db.herois.findOne();
db.herois.find().limit(1000).sort({nome:-1})// -1 (do menor para o maior)
db.herois.find({},{poder:1,_id:0})

// CREATE
db.herois.insert(
    {
        nome:'Flash',
        poder:'Velocidade',
        dataNasciemnto: '1989-05-14'
    }
)

// READ
db.herois.find()

// UPDATE
db.herois.update({_id:ObjectId("5ee1720e5becbec30fe58371")}, {nome: 'Mulher Maravilha'})

db.herois.update({_id :ObjectId("5ee173365becbec30fe58375")}, {$set : {nome: 'Mulher Maravilha'}})

// vai atualizar o primeiro que encontrar
db.herois.update({poder:'Velocidade'}, {$set:{poder:'super forca'}})

// DELETE
//remove precisa de um where, sem where remove todo mundo
db.herois.remove({_id : ObjectId("5ee173365becbec30fe58372")})