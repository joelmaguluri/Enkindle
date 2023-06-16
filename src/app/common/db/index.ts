import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URI || "");

const db = client.db("Enkindle");

export default db;
