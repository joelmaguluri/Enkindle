import { MongoClient, Db } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

interface CustomRequest extends NextApiRequest {
  dbClient?: MongoClient;
  db?: Db;
}

const client = new MongoClient(process.env.DATABASE_URI || "");

const router = createRouter<CustomRequest, NextApiResponse>();

router.use(async (req, res, next) => {
  req.dbClient = client;
  req.db = client.db("Enkindle");
  console.log("connected");
  console.log(res);
  return next();
});

export default router;
