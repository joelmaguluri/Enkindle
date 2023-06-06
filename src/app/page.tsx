import QuoteWrapper from "@/components/QuoteWrapper";

export default function Home() {
  return (
    <main className="h-screen ">
      <div className="flex flex-col h-full ml-48 mr-48 space-y-6 ">
        <div className="justify-center mx-auto">
          <h1 className="text-6xl font-extrabold flex-nowrap">Inspire Me</h1>
        </div>
        <QuoteWrapper />
      </div>
    </main>
  );
}

