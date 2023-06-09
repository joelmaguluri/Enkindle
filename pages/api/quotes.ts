import router from "@/app/common/db";
import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
interface CustomRequest extends NextApiRequest {
  dbClient?: MongoClient;
  db?: Db;
}
// Route handler
router.get(async (req: CustomRequest, res: NextApiResponse) => {
  const db = req?.db;
  const QUOTES_PER_PAGE = 25;
  const page = parseInt(req.query.page as string) || 1; // Get the requested page number from the query parameters

  try {
    const quotesRef = await db?.collection("quotes");
    console.log(quotesRef?.collectionName);

    const skipCount = (page - 1) * QUOTES_PER_PAGE;

    const quotesCursor = await quotesRef
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

function onError(res: any): void {
  res.status(500).end("Internal server error");
}

export default router.handler({
  onError: onError,
});
