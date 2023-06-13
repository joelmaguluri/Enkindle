import Image from "next/image";
import React from "react";

function SuggestedAuthors() {
  return (
    <div className="px-2 space-y-2">
      <h1 className="mx-1 font-mono text-xl font-extrabold flex-nowrap">
        Recommended Authors
      </h1>
      <div className="flex flex-col space-y-3">
        {[
          "Marilyn Monroe",
          "Elbert Hubbard",
          " J.R. Ward",
          "Nicholas Sparks",
        ].map((author) => (
          <div
            key={author}
            className="inline-flex items-center justify-between space-x-4 "
          >
            <div className="inline-flex items-center space-x-2">
              <div className="relative w-12 h-12 overflow-hidden border-2 rounded-full border-battleship-gray border-opacity-30">
                {/* <BiUserCircle className="w-full h-full fill-battleship-gray opacity-40" /> */}
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmElSxnZY7EOv3kKuKtoUFkpKyNsggLRcBOw&usqp=CAU"
                  alt="image"
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                />
              </div>
              <p className="font-sans text-sm font-semibold">{author}</p>
            </div>
            <div className="inline-flex items-center justify-end px-3 py-2 border-2 cursor-pointer rounded-xl border-battleship-gray border-opacity-20">
              <p className="font-sans text-sm font-bold text-eerie-black">
                Follow
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedAuthors;
