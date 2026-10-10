"use client";

import Link from "next/link";
import { restaurants } from "../../data/restaurants";
import { useState } from "react";

export default function RestaurantsPage() {
  const [category, setCategory] = useState("전체");

  const categories = [
    "전체",
    ...Array.from(new Set(restaurants.map((restaurant) => restaurant.category))),
  ];

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === category
        );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">맛집 목록</h1>

      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 font-medium ${
              category === item
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              href={`/restaurants/${restaurant.id}`}
              className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <span className="text-4xl">{restaurant.emoji}</span>
              <span className="text-lg font-bold">{restaurant.name}</span>
              <span className="text-sm text-gray-500">
                {restaurant.category} · {restaurant.menu}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}