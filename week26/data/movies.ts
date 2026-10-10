export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '나 홀로 집에',
    year: 1990,
    genre: '코미디, 가족',
    director: '크리스 콜럼버스',
    description:
      '크리스마스 여행을 떠난 가족에게 홀로 남겨진 소년 케빈의 이야기입니다.\n집을 노리는 두 도둑에 맞서 케빈이 기발한 함정을 만들며 집을 지켜냅니다.',
    image: '/posters/homealone.jpeg',
  },
  {
    id: 2,
    title: '나니아 연대기: 새벽 출정호의 항해',
    year: 2010,
    genre: '판타지, 모험',
    director: '마이클 앱티드',
    description:
      '루시와 에드먼드가 다시 나니아 세계로 들어가 펼치는 새로운 모험을 그린 이야기입니다.\n캐스피언 왕과 함께 새벽 출정호를 타고 신비로운 섬들을 탐험합니다.',
    image: '/posters/narnia.jpeg',
  },
  {
    id: 3,
    title: '포레스트 검프',
    year: 1994,
    genre: '드라마, 로맨스',
    director: '로버트 저메키스',
    description:
      '순수한 마음을 가진 포레스트 검프가 자신의 삶을 담담하게 이야기하는 영화입니다.\n우연처럼 이어지는 특별한 경험 속에서도 사랑과 사람에 대한 진심을 잃지 않는 모습을 보여줍니다.',
    image: '/posters/forrestgump.jpeg',
  },
  {
    id: 4,
    title: '극장판 체인소 맨: 레제편',
    year: 2025,
    genre: '애니메이션, 액션',
    director: '요시하라 타츠야',
    description:
      '데빌 헌터로 살아가는 덴지가 수수께끼의 소녀 레제를 만나며 벌어지는 이야기입니다.\n두 사람의 관계와 함께 강렬한 액션과 예측할 수 없는 사건들이 펼쳐집니다.',
    image: '/posters/chainsawman.jpeg',
  },
  {
    id: 5,
    title: '악마는 프라다를 입는다',
    year: 2006,
    genre: '코미디, 드라마',
    director: '데이비드 프랭클',
    description:
      '저널리스트를 꿈꾸는 앤디가 유명 패션 잡지의 편집장 미란다의 비서로 일하게 되면서 벌어지는 이야기입니다.\n화려한 패션 업계 속에서 일과 자신의 삶 사이의 균형을 고민하며 성장해갑니다.',
    image: '/posters/thedevilwearsprada.jpeg',
  },
  {
    id: 6,
    title: '만약에 우리',
    year: 2025,
    genre: '로맨스, 드라마',
    director: '김도영',
    description:
      '서로에게 가장 찬란했던 시절을 함께했던 두 사람이 지나간 사랑과 기억을 다시 마주하는 이야기입니다.\n사랑했던 순간과 헤어진 이후의 감정을 현실적으로 그려낸 로맨스 영화입니다.',
    image: '/posters/ifwe.jpeg',
  },
  {
    id: 7,
    title: '비긴 어게인',
    year: 2013,
    genre: '드라마, 음악, 로맨스',
    director: '존 카니',
    description:
      '싱어송라이터 그레타와 음반 프로듀서 댄이 우연히 만나 함께 음악을 만들어가는 이야기입니다.\n뉴욕의 거리 곳곳을 녹음실 삼아 새로운 앨범을 만들며 각자의 삶도 다시 시작하게 됩니다.',
    image: '/posters/beginagain.jpeg',
  },
];