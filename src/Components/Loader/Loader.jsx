import React from "react";

export default function Loader() {
  // sm:min-w-full md:min-w-full lg:min-w-full xl:min-w-full
  return (
    <div className="max-w-full bg-black min-h-screen flex items-center justify-center">
        <h1 className="text-white text-6xl animation"></h1>
    </div>
  );
}
