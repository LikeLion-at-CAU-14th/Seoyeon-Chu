import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 py-20 text-center">
      <p className="text-7xl">🍽️</p>

      <h1 className="text-4xl font-bold">404</h1>

      <p className="text-xl font-bold">
        그런 맛집은 도감에 없어요!
      </p>

      <p className="text-gray-500">
        다른 맛집을 찾아보는 건 어떨까요?
      </p>

      <Link
        href="/restaurants"
        className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        맛집 목록으로 가기
      </Link>
    </div>
  );
}