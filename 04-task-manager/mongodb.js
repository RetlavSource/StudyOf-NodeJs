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

    db.collection('tasks').findOne({ _id: new ObjectID("5f15b98ad1b19f2e90844d7a") }, (error, task) => {
        console.log(task);
    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    })
})