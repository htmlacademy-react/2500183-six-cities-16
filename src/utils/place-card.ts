const MAX_RATING = 5;

export const calculateRatingWidth = (rating: number): string => `${ Math.round(rating) * 100 / MAX_RATING}%`;

export const upFirstLetter = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

