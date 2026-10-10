"use client";

import { useRouter } from "next/navigation";
import { restaurants } from "@/data/restaurants";

export default function RandomPage() {
  const router = useRouter();

  const goToRandomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];

    router.push(`/restaurants/${randomRestaurant.id}`);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center">
      <p className="text-6xl">🎲</p>

      <h1 className="text-3xl font-bold">오늘 뭐 먹지?</h1>

      <p className="text-gray-600">
        고민된다면 랜덤으로 맛집을 골라보세요!
      </p>

      <button
        onClick={goToRandomRestaurant}
        className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        랜덤 맛집 뽑기
      </button>
    </div>
  );
}