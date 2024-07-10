type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type {PlaceCardProps};
