"use client";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandThumbsDown } from "react-icons/bs";
import { roboto } from "../../pages/_app";
function Quote({
  author = "Some Author",
  quote = "",
  tags = ["dreams", "love", "reality", "sleep"],
  border = true,
}) {
  const [like, setLiked] = useState(true);

  return (
    <div
      className={
        border
          ? "border-silver border-t-2"
          : "border-transparent mt-4  border-t-2"
      }
    >
      <div className="flex flex-col px-3 py-3 space-y-4 font-light">
        <h1>
          {quote} -{" "}
          <span
            className={"font-mono font-bold font-xl pt-2 " + roboto.className}
          >
            {author}
          </span>
        </h1>

        <p className="space-x-3 font-serif font-extralight">
          {tags.map((tag) => (
            <a
              className="px-3 py-1 text-xs cursor-pointer text-battleship-gray bg-timberwolf rounded-xl bg-opacity-30"
              key={tag}
              href={"/tags/" + tag}
            >
              {tag}
            </a>
          ))}
        </p>

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
    </div>
  );
}

export default Quote;
