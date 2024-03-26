// movie.ts
export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}

export interface MovieImage {
  url: string;
  width: number;
  height: number;
}

export interface Movie {
  synopsis: string;
  _id: string;
  primaryTitle: string;
  Year: number;
  rating: number;
  genres: string[];
  poster: string;
  media: {
    trailers: Trailer[];
    images: MovieImage[];
  };
}

export interface RelatedMovie extends Movie {
  tconst: string;
  originalTitle: string;
  runtimeMinutes: number;
  numVotes: number;
}
