type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type Reviews = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
  }

export type {Reviews};
