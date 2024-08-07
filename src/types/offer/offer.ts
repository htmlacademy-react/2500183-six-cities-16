type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
type City = {
  name: string;
  location: Location;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type PlaceCardT = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type PlaceCardAllT = Omit<PlaceCardT, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
  };

export type {PlaceCardT, PlaceCardAllT, Location, City};

