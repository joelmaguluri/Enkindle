"use client";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandThumbsDown } from "react-icons/bs";
function Quote({
  author = "Some Author",
  quote = "",
  tags = ["dreams", "love", "reality", "sleep"],
}) {
  const [like, setLiked] = useState(true);

  return (
    <div className="flex flex-col py-4 space-y-2 font-light">
      <h1>
        {quote} - <span className="font-serif font-bold font-xl">{author}</span>
      </h1>
      <div className="inline-flex font-bold">
        Tags:
        <p className="pl-4 space-x-1 font-serif font-extralight">
          {tags.map((tag) => (
            <a
              className="p-[2px] text-xs text-gray-400 border-2 border-gray-400 rounded-md cursor-pointer"
              key={tag}
              href={"/tags/" + tag}
            >
              {tag}
            </a>
          ))}
        </p>
      </div>
      <div className="flex flex-row self-end mr-10 space-x-4">
        {like ? (
          <>
            <AiOutlineHeart
              className="w-6 h-6 cursor-pointer fill-gray-400"
              onClick={() => setLiked(!like)}
            />
            <BsHandThumbsDown className="w-6 h-6 cursor-pointer fill-gray-400" />
          </>
        ) : (
          <>
            <AiFillHeart
              className="w-6 h-6 cursor-pointer fill-red-400"
              onClick={() => setLiked(!like)}
            />
            <BsHandThumbsDown className="w-6 h-6 cursor-pointer fill-gray-400" />
          </>
        )}
      </div>
    </div>
  );
}

export default Quote;
