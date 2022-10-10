const path = require('path');
require('dotenv').config({ path: path.resolve(path.join(__dirname, '..', '.env'))});
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

// COURSE: Read Data in MongoDB

// async function run() {
//     try {
//         await client.connect();
//         // database and collection code goes here
//         const db = client.db('sample_guides');
//         const coll = db.collection('planets');
//         // find code goes here
//         const cursor = coll.find();
//         // iterate code goes here
//         await cursor.forEach(console.log);
//     } finally {
//         await client.close();
//     }
// }

// COURSE: Read Data from MongoDB With Queries

// async function run() {
//     try {
//         await client.connect();
//         // database and collection code goes here
//         const db = client.db('sample_guides');
//         const coll = db.collection('planets');
//         // find code goes here
//         const cursor = coll.find({ hasRings: false, mainAtmosphere: 'Ar' });
//         // iterate code goes here
//         await cursor.forEach(console.log);
//     } finally {
//         // Ensures thate the client will close when you finish/error
//         await client.close();
//     }
// }

async function run() {
    try {
        await client.connect();
        const coll = client.db('sample_guides').collection('planets');

        // find code goes here
        // const cursor = coll.find({
        //     'surfaceTemperatureC.mean': { $lt: 15 },
        //     'surfaceTemperatureC.min': { $gt: -100 }
        // });

        // const cursor = coll.find({
        //     $and: [{ orderFromSun: { $gt: 2} }, { orderFromSun: { $lt: 5 } }]
        // });

        const cursor = coll.find({
            $or: [{ orderFromSun: { $gt: 7 } }, { orderFromSun: { $lt: 2 } }],
        });

        await cursor.forEach(console.log);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);