import React from "react";

const quotes = [
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
  `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
`,
];
import Image from "../app/common/html/Image";
import Quote from "./Quote";
function QuoteWrapper() {
  return (
    <div className="flex flex-col">
      {quotes.map((quote) => (
        <Quote quote={quote} key={quote}/>
      ))}
    </div>
  );
}

export default QuoteWrapper;
