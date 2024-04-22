import axios from "axios";
import toast from "react-hot-toast";
import { MovieDetailData } from "../types/movie";

export const loadMovieDetails = async (movieId: string|undefined, setMovieData: React.Dispatch<React.SetStateAction<MovieDetailData | null>>, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    setIsLoading(true);
    const response = await axios.post<MovieDetailData>(`http://localhost:4000/movie-detail`, { movieId });
    setMovieData(response.data);
    setIsLoading(false);
  } catch (error:any) {
    toast.error('Error fetching movie details', error);
    setIsLoading(false);
  }
};

export const fetchUserLists = async (setUserLists: React.Dispatch<React.SetStateAction<any[]>>) => {
  try {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      const response = await axios.post('http://localhost:4000/user', { userId });
      const updatedUserLists = response.data.user.userLists;
      setUserLists(updatedUserLists);
      sessionStorage.setItem('userLists', JSON.stringify(updatedUserLists));
    }
  } catch (error: any) {
    toast.error('Error fetching user lists', error);
  }
};

export const checkPreferences = (movieId: string|undefined, preferences: any, setIsInPreferences: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (preferences && preferences.movies) {
    setIsInPreferences(preferences.movies.some((p: { _id: string }) => p._id === movieId));
  } else {
    setIsInPreferences(false);
  }
};