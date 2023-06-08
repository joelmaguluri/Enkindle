"use client";
import React, { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import Quote from "./Quote";
const quotes = [
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
];

function QuoteWrapper() {
  const [page, setPage] = useState(1);
  const range = Array.from({ length: 20 }, (_, index) => index);
  return (
    <div className="flex flex-col ">
      <div className="mx-4">
        {quotes.map((quote) => (
          <Quote quote={quote} key={quote} />
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
            {number}
          </span>
        ))}
        <GoChevronRight className="w-10 h-10 fill-gray-400" />
      </div>
    </div>
  );
}

export default QuoteWrapper;
