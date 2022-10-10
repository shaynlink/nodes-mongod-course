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

// COURSE: Read Date using Operators and Compound Queries

// async function run() {
//     try {
//         await client.connect();
//         const coll = client.db('sample_guides').collection('planets');

//         // find code goes here
//         // const cursor = coll.find({
//         //     'surfaceTemperatureC.mean': { $lt: 15 },
//         //     'surfaceTemperatureC.min': { $gt: -100 }
//         // });

//         // const cursor = coll.find({
//         //     $and: [{ orderFromSun: { $gt: 2} }, { orderFromSun: { $lt: 5 } }]
//         // });

//         const cursor = coll.find({
//             $or: [{ orderFromSun: { $gt: 7 } }, { orderFromSun: { $lt: 2 } }],
//         });

//         await cursor.forEach(console.log);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// COURSE: Insert Data in MongoDB

// async function run() {
//     try {
//         await client.connect();
//         // database and collection code goes here
//         const db = client.db('sample_guides');
//         const coll = db.collection('comets');
//         // insert code goes here
//         const docs = [
//             {name: "Halley's Comet", officialName: "1P/Halley", orbitalPeriod: 75, radius: 3.4175, mass: 2.2e14},
//             {name: "Wild2", officialName: "81P/Wild", orbitalPeriod: 6.41, radius: 1.5534, mass: 2.3e13},
//             {name: "Comet Hyakutake", officialName: "C/1996 B2", orbitalPeriod: 17000, radius: 0.77671, mass: 8.8e12}
//         ];
  
//         const result = await coll.insertMany(docs);
  
//         // display the results of your operation
//         console.log(result.insertedIds);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

// COURSE: Update Data in MongoDB

// async function run() {
//     try {
//         await client.connect();
//         // database and collection code goes here
//         const db = client.db('sample_guides');
//         const coll = db.collection('comets');
//         // update code goes here
//         const filter = { };
//         const updateDoc = {
//             $mul: {
//                 radius: 1.60934
//             }
//         };

//         const result = await coll.updateMany(filter, updateDoc);
//         // amount deleted code goes here
//         console.log('Number of documents updated: %s', result.modifiedCount);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }

async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db('sample_guides');
        const coll = db.collection('comets');
        // delete code goes here
        const doc = {
            orbitalPeriod: {
                $gt: 5,
                $lt: 85
            }
        };

        const result = await coll.deleteMany(doc);
        // amount deleted code goes here
        console.log('Number of documents deleted: %s', result.deletedCount);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);