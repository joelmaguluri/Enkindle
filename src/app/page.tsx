"use client";
import QuoteWrapper from "@/components/QuoteWrapper";
import { BsPencilSquare } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import SuggestedAuthors from "@/components/SuggestedAuthors";
import AddQuoteDialog from "@/components/AddQuoteDialog";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row items-center justify-between px-6 py-2 border-b-2 border-opacity-25 border-battleship-gray justify">
      <h1 className={"text-3xl font-extrabold flex-nowrap mx-6"}>
        Enkindle
      </h1>
      <div className="h-[30%] w-[40%] border-2 border-black-40 rounded-lg mx-6">
        <input className="w-[90%] h-full mx-3 my-[10px] outline-none" placeholder="Search Quotes or Authors" />
      </div>
      <div className="inline-flex mx-6 space-x-6 xl:mx-12">
        <button
          className="inline-flex items-center px-2 py-[0.5px] space-x-2 border-2 cursor-pointer rounded-xl border-opacity-20 sm:border-transparent md:border-battleship-gray md:border-opacity-20"
          onClick={() => setOpen(true)}
        >
          <BsPencilSquare className="w-4 h-4 fill-eerie-black sm:w-6 sm:h-6 md:w-4 md:h-4" />

          <p className="font-sans text-sm font-bold text-eerie-black sm:opacity-0 md:opacity-100">
            Add Quote
          </p>
        </button>
        <div className="relative w-12 h-12 overflow-hidden border-2 rounded-full border-battleship-gray border-opacity-30">
          <BiUserCircle className="w-full h-full fill-battleship-gray opacity-40" />
        </div>
      </div>
      <AddQuoteDialog open={open} onClose={() => setOpen(!open)} />

    </div>)
}



export default function Home() {
  return (
    <main className="h-screen ">
      <Header />
      <div className="flex flex-col h-full ">
        
        <div className="inline-flex py-1 pb-4 space-x-2">
          <div className="border-r-2 border-opacity-30 border-battleship-gray w-[80%]">
            <div className="pl-[15%] px-4 ">
              <QuoteWrapper />
            </div>
          </div>
          <div className="py-6">
          <SuggestedAuthors />

          </div>
        </div>
      </div>
    </main>
  );
}

