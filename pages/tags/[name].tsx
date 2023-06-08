"use client";
import QuoteWrapper from "@/components/QuoteWrapper";
import { useRouter } from "next/router";

export default function TagContent() {
  const router = useRouter();

  return (
    <main className="h-screen ">
      <div className="flex flex-col h-full ml-48 mr-48 space-y-6 ">
        <div className="justify-center mx-auto">
          <h1 className="text-6xl font-extrabold flex-nowrap">
            {router.query.name}
          </h1>
        </div>
        <QuoteWrapper />
      </div>
    </main>
  );
}
