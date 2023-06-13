import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

interface CustomRequest extends NextApiRequest {
  dbClient?: MongoClient;
  db?: Db;
}

const client = new MongoClient(process.env.DATABASE_URI || "");

const router = createRouter<CustomRequest, NextApiResponse>();

router.use(async (req, res, next) => {
  console.log("connected");
  if (client.db.name !== "Enkindle") {
    await client.connect();
    console.log("here");
  }
  req.dbClient = client;
  req.db = client.db("Enkindle");
  return next();
});

export default router;
