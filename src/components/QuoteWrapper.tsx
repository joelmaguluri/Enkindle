"use client";
import React, { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import Quote from "./Quote";
import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  page: number;
  totalPages: number;
  quotes: any[];
}

interface Quote {
  quote: string;
  author: string;
  tags: string[];
}
function QuoteWrapper() {
  const [page, setPage] = useState(0);
  const range = Array.from({ length: 20 }, (_, index) => index);
  const [quotes, setQuotes] = useState([]);
  const getQuotesPerPage = async (page: number) => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        `/api/quotes?page=${page}`
      );
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      console.error("Error fetching quotes:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData: any = await getQuotesPerPage(
          page == 0 ? page + 1 : page
        );
        setQuotes(jsonData.quotes);
        console.log(jsonData);
      } catch (error) {
        // Handle error if needed
        console.log("error");
      }
    };

    fetchData();
  }, [page]);
  return (
    <div className="flex flex-col ">
      <div className="mx-4">
        {quotes.map((quote: Quote) => (
          <Quote
            quote={quote?.quote}
            key={quote.quote}
            author={quote.author}
            tags={quote.tags}
          />
        ))}
      </div>

      <div className="flex justify-center w-full my-4 space-x-1 ">
        <GoChevronLeft className="w-10 h-10 fill-gray-400" />
        {range.map((number) => (
          <span
            className={`flex items-center justify-center w-10 h-10 text-lg border-2 rounded-full cursor-pointer ${
              number === page
                ? "bg-gray-200 text-gray-500"
                : "bg-white text-gray-700"
            }`}
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </span>
        ))}
        <GoChevronRight className="w-10 h-10 fill-gray-400" />
      </div>
    </div>
  );
}

export default QuoteWrapper;
