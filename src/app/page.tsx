"use client";
import QuoteWrapper from "@/components/QuoteWrapper";
import { BsPencilSquare } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import SuggestedAuthors from "@/components/SuggestedAuthors";
import AddQuoteDialog from "@/components/AddQuoteDialog";
import React, { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="h-screen ">
      <div className="flex flex-col h-full space-y-8 ">
        <div className="flex flex-row items-center justify-between py-4 border-b-2 border-opacity-25 border-battleship-gray justify">
          <h1 className={"mx-6 text-3xl font-extrabold flex-nowrap "}>
            Enkindle
          </h1>
          <div className="inline-flex mr-12 space-x-6">
            <button
              className="inline-flex border-2 rounded-xl border-battleship-gray items-center  space-x-2  border-opacity-20 px-3 py-[0.5px]  cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <BsPencilSquare className="w-4 h-4 fill-eerie-black" />

              <p className="font-sans text-sm font-bold text-eerie-black">
                Add Quote
              </p>
            </button>
            <AddQuoteDialog open={open} onClose={() => setOpen(!open)} />
            <div className="relative w-12 h-12 overflow-hidden border-2 rounded-full border-battleship-gray border-opacity-30">
              <BiUserCircle className="w-full h-full fill-battleship-gray opacity-40" />
            </div>
          </div>
        </div>

        <div className="inline-flex pb-4 space-x-2">
          <div className="border-r-2 border-opacity-30 border-battleship-gray w-[80%]">
            <div className="pl-[15%] px-4 ">
              <QuoteWrapper />
            </div>
          </div>
          <SuggestedAuthors />
        </div>
      </div>
    </main>
  );
}

