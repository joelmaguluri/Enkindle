import router from "@/app/common/db";
import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

interface CustomRequest extends NextApiRequest {
  dbClient?: MongoClient;
  db?: Db;
}

const QUOTES_PER_PAGE = 25;

// Route handler
router.get(async (req: CustomRequest, res: NextApiResponse) => {
  const db = req.db;
  const page = parseInt(req.query.page as string) || 1;

  try {
    const quotesRef = db?.collection("quotes");
    const skipCount = (page - 1) * QUOTES_PER_PAGE;

    const quotesCursor = quotesRef
      ?.find({})
      .skip(skipCount)
      .limit(QUOTES_PER_PAGE);

    const quotes = await quotesCursor?.toArray();
    console.log(quotes);
    res.status(200).json({
      page: page,
      quotes: quotes || [],
    });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).json({ error: "Error fetching quotes" });
  }
});

function onError(err: unknown, req: CustomRequest, res: NextApiResponse) {
  console.log(err);
  res.status(500).end("Internal server error");
}

export default router.handler({ onError });
