import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/common/db";
const QUOTES_PER_PAGE = 25;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const page = parseInt(req.query.page as string) || 1; // Get the requested page number from the query parameters

  try {
    const quotesRef = db.collection("quotes");

    const totalQuotesSnapshot = await quotesRef.get();
    const totalQuotesCount = totalQuotesSnapshot.size;

    const totalPages = Math.ceil(totalQuotesCount / QUOTES_PER_PAGE);

    const startIdx = (page - 1) * QUOTES_PER_PAGE;
    const endIdx = startIdx + QUOTES_PER_PAGE;

    const querySnapshot = await quotesRef
      .orderBy("createdAt")
      .startAt(startIdx)
      .endAt(endIdx)
      .get();
    const quotes = querySnapshot.docs.map((doc) => doc.data());

    res.status(200).json({
      page: page,
      totalPages: totalPages,
      quotes: quotes,
    });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).json({ error: "Error fetching quotes" });
  }
}
