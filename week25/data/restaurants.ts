export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "학교종이땡땡땡",
    category: "분식",
    emoji: "🍜",
    menu: "김치치즈돌솥",
    price: 7500,
    comment: "무채랑 같이 먹으면 개리얼 존맛",
  },
  {
    id: 2,
    name: "우동 키노야 중앙대점",
    category: "일식",
    emoji: "🍱",
    menu: "수제 돈까스",
    price: 11500,
    comment: "튀김류도 맛있지만 여기는 붓카케 우동이 진또배기임",
  },
  {
    id: 3,
    name: "더진국",
    category: "한식",
    emoji: "🍲",
    menu: "순대국밥",
    price: 8500,
    comment: "3차 국룰",
  },
  {
    id: 4,
    name: "더머커피",
    category: "양식",
    emoji: "🍔",
    menu: "리코타 햄 샌드위치",
    price: 8000,
    comment: "카공은 무조건 여기서",
  },
  {
    id: 5,
    name: "파슬리,파슬리 흑석점",
    category: "양식",
    emoji: "🍝",
    menu: "알리오 올리오",
    price: 12000,
    comment: "개쩌는 데이트 코스 인정합니다",
  },
  {
    id: 6,
    name: "기꾸스시",
    category: "일식",
    emoji: "🍣",
    menu: "기꾸초밥",
    price: 12000,
    comment: "정문 앞 초밥 1티어",
  },
];