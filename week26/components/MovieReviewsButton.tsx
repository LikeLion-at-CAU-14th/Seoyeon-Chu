// 과제3 - code splitting으로 관람평 불러오기
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MovieReviews = dynamic(
  () => import('./MovieReviews'),
  {
    loading: () => <p>관람평을 불러오는 중...</p>,
  }
);

export default function MovieReviewsButton() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      <button
        className="movie-reviews-button"
        onClick={() => setShowReviews((prev) => !prev)}
      >
        {showReviews ? '관람평 닫기' : '관람평 보기'}
      </button>

      {showReviews && <MovieReviews />}
    </>
  );
}