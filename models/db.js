const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

module.exports = async () => {
    const url = "mongodb://127.0.0.1:27017/oyebeauty";
    const client = new MongoClient(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Database Connected");
        const db = client.db();
        return db;
    } catch (err) {
        console.error(err);
    }
}