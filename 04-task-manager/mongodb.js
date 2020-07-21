// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// lesson's Server Discover and Monitoring engine option: { useNewUrlParser: true } - is the default option, so, no need to use
// NEW Server Discover and Monitoring engine option: { useUnifiedTopology: true }
MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // ****************************
    // ********** CREATE **********

    // db.collection('users').insertOne({ 
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     }
    // ], (error, result) => { 
    //     if (error) {
    //         return console.log('Unable to insert tasks!');
    //     }

    //     console.log(result.ops);
    // })


    // **************************
    // ********** READ **********

    // db.collection('users').findOne({ _id: new ObjectID("5f15bd0e89af632fbaa83d0c") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({ age: 41 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 41 }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5f15b98ad1b19f2e90844d7a") }, (error, task) => {
    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })


    // ****************************
    // ********** UPDATE **********

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f15b1fd5832f02d7b4e73df")
    // }, {
    //     $inc: {
    //         age: -19
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })


    // ****************************
    // ********** DELETE **********

    // db.collection('users').deleteMany({
    //     age: 23
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description : "Clean the house"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})