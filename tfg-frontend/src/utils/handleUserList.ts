import axios from "axios";
import toast from "react-hot-toast";

export const handleAddToUserList = async (listName: string | null, movieId: string | undefined) => {
  if (!listName) {
    toast.error('Please select a list');
    return;
  }
  try {
    const response = await axios.post('http://localhost:4000/user/list/add', {
      userId: sessionStorage.userId,
      listName: listName,
      movieId: movieId
    });

    if (response.data.message === "Movie already exists in the list.") {
      toast.error("Movie already exists in the selected list.");
    } else {
      toast.success("Movie added to the selected list!");
    }
  } catch (error:any) {
    toast.error('Error adding movie to the list', error);
  }
};