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

export interface Media {
  trailers: Trailer[];
  images: MovieImage[];
}

export interface Movie {
  overview: string;
  _id: string;
  title: string;
  release_date: number;
  vote_average: number;
  genres: string[];
  poster_path: string;
  media: {
    trailers: Trailer[];
    images: MovieImage[];
  };
}

export interface RelatedMovie extends Movie {
  imdb_id: string;
  title: string;
  runtime: number;
  vote_count: number;
}
