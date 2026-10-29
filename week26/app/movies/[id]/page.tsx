import { movies } from '@/data/movies';
import Image from 'next/image';
import { Noto_Serif_KR } from 'next/font/google';
import MovieReviewsButton from '@/components/MovieReviewsButton';

// 과제 2 - 영화 상세 페이지에만 다른 폰트 적용
const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <main className={notoSerifKR.className}>
      <h1>{movie.title}</h1>
      
      {/* 과제 2 - next/image를 활용한 Image Optimization */}
      <Image
        src={movie.image}
        alt={`${movie.title} 포스터`}
        width={350}
        height={500}
        priority
      />

      <p>
        {movie.year} · {movie.genre} · {movie.director}
      </p>

      <p style={{ whiteSpace: 'pre-line' }}>{movie.description}</p>

      {/*과제3 - 관람평 불러오기*/}
      <MovieReviewsButton />
    </main>
  );
}