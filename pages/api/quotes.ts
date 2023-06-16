import db from "@/app/common/db";

const QUOTES_PER_PAGE = 25;

// Route handler
export default async function handler(req: any, res: any) {
  const page = parseInt(req.query.page as string) || 1;

  try {
    const quotesRef = db?.collection("quotes");

    const lastDoc = await quotesRef
      ?.find({})
      .limit(QUOTES_PER_PAGE)
      .skip((page - 1) * QUOTES_PER_PAGE)
      .toArray()
      .then((docs) => docs[docs.length - 1]);

    const quotesCursor = quotesRef
      ?.find({
        _id: { $gt: lastDoc?._id },
      })
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
}
