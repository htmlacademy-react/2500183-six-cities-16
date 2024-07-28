type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type ReviewsT = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
  }

export type {ReviewsT};
