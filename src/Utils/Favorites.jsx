// Utility functions to manage favorites

const FAVORITES_KEY = 'favorites';

// Get favorites from local storage
export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

// Save favorites to local storage
export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

// Add a show to favorites
export const addFavoriteShow = (show) => {
  const favorites = getFavorites();
  if (!favorites.find(fav => fav.id === show.id)) {
    favorites.push(show);
    saveFavorites(favorites);
  }
};

// Remove a show from favorites
export const removeFavoriteShow = (showId) => {
  let favorites = getFavorites();
  favorites = favorites.filter(show => show.id !== showId);
  saveFavorites(favorites);
};

// Check if a show is in favorites
export const isFavorite = (showId) => {
  const favorites = getFavorites();
  return favorites.some(show => show.id === showId);
};
