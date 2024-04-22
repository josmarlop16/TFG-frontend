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

export interface Provider {
  provider_name: string;
  logo_path: string;
}

export interface Providers {
  buy: Provider[];
  flatrate: Provider[];
}

export interface Movie {
  overview: string;
  _id: string;
  title: string;
  release_date: number;
  vote_average: number;
  genres: string[];
  poster_path: string;
  media: Media;
  providers: Providers;
  runtime: number;
}

export interface RelatedMovie extends Movie {
  imdb_id: string;
  runtime: number;
  vote_count: number;
}

export interface MovieDetailData {
  film: Movie;
  crew: CrewMember[];
  relatedMovies: RelatedMovie[];
  media: Media;
  providers: Providers;
}

export interface CrewMember {
  _id: string;
  primaryName: string;
  primaryProfession: string[];
}
