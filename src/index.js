const path = require('path');
require('dotenv').config({ path: path.resolve(path.join(__dirname, '..', '.env'))});
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        // find code goes here
        // iterate code goes here
    } finally {
        await client.close();
    }
}

run().catch(console.dir);