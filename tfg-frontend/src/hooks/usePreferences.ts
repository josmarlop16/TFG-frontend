// handlePreferences.ts

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const usePreferences = () => {
  const [isInPreferences, setIsInPreferences] = useState<boolean>(false);

  const updatePreferencesInSessionStorage = async () => {
    try {
      const userId = sessionStorage.userId;
      if (!userId) {
        console.error("User ID not found in session storage.");
        return;
      }

      const response = await axios.post('http://localhost:4000/user', { userId: sessionStorage.getItem('userId') });

      const updatedPreferences = response.data.user.preferences;

      sessionStorage.setItem('preferences', JSON.stringify(updatedPreferences));
    } catch (error) {
      console.error('Error updating preferences in sessionStorage:', error);
    }
  };

  const handleAddToPreferences = async (movieId: string) => {
    try {
      const response = await axios.post('http://localhost:4000/add-preference', {
        userId: sessionStorage.userId,
        movieId: movieId
      });

      if (response.data.message === "La película ya está en las preferencias del usuario.") {
        toast.error("Movie already on your preferences.");
      } else {
        await updatePreferencesInSessionStorage();
        setIsInPreferences(true);
        toast.success("Movie added to your preferences!");
      }
    } catch (error) {
      console.error('Error adding to preferences:', error);
    }
  };

  const handleRemoveFromPreferences = async (movieId: string) => {
    try {
      const response = await axios.post('http://localhost:4000/remove-preference', {
        userId: sessionStorage.userId,
        movieId: movieId
      });

      if (response.data.message === "La película no está en las preferencias del usuario.") {
        toast.error("Movie is not on your preferences.");
      } else {
        await updatePreferencesInSessionStorage();
        setIsInPreferences(false);
        toast.success("Movie deleted from your preferences!");
      }
    } catch (error) {
      console.error('Error removing from preferences:', error);
    }
  };

  return {
    isInPreferences,
    updatePreferencesInSessionStorage,
    handleAddToPreferences,
    handleRemoveFromPreferences,
  };
};
