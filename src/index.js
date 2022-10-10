const path = require('path');
require('dotenv').config({ path: path.resolve(path.join(__dirname, '..', '.env'))});
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db('sample_guides');
        const coll = db.collection('planets');
        // find code goes here
        const cursor = coll.find();
        // iterate code goes here
        await cursor.forEach(console.log);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);