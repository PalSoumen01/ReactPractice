import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";

function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
        <main className="w-full max-w-4xl mt-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
            Welcome to Shopy
          </h1>
          <Items />
        </main>
      </div>
    </>
  );
}

export default Home;
