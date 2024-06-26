import React from "react";
import {Headland_One} from "next/font/google";

const headland = Headland_One({weight: ["400"], subsets: ["latin"]});

export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about", "about page", "about section"],
};

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {cache: "no-store"});
  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const currentTime = await getTime();

  return (
    <div className={`${headland.className}`}>
      <h2 className="text-3xl font-semibold">About Page</h2>
      <h3 className="text-2xl text-red-500">Time: {currentTime}</h3>
    </div>
  );
};

export default AboutPage;
