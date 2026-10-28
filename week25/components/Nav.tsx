"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 font-medium">
      <Link
        href="/restaurants"
        className={
          pathname.startsWith("/restaurants")
            ? "font-bold text-orange-500"
            : ""
        }
      >
        맛집 목록
      </Link>

      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "font-bold text-orange-500"
            : ""
        }
      >
        소개
      </Link>
    </nav>
  );
}