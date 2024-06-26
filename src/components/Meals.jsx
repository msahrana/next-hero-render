/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";

export const generateMetadata = async ({searchParams}) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchParams}`
  );
  const searchData = await res.json();

  return {
    title: {
      absolute: `${searchData.title}`,
    },
    description: searchData.body,
    keywords: searchData.body.split(" "),
  };
};

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      console.log(data.meals);
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("No Data Found");
    }
  };

  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="mt-12">
      <input
        onChange={handler}
        className="p-4 outline-none border text-slate-900"
        type="text"
        placeholder="Search Meals"
      />
      <button
        onClick={() => loadData()}
        className="bg-red-500 p-4 text-white font-semibold"
      >
        Search
      </button>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.length > 0 &&
          !error &&
          meals?.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-4">
              <Image
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                width={500}
                height={500}
              />
              <h6>
                <span className="font-bold">Title:</span> {meal.strMeal}
              </h6>
              <p>
                <span className="font-bold">Description:</span>{" "}
                {meal.strInstructions}
              </p>
            </div>
          ))}
        {error && <h2>No Data Found ...</h2>}
      </div>
    </div>
  );
};

export default Meals;
