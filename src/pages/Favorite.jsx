import React from 'react';
import ShowCard from '../components/ShowCard'; // Import the ShowCard component
import { getFavorites } from '../Utils/Favorites'; // Import utility functions

function Favorites() {
  const favorites = getFavorites();

  return (
    <div className="favorites">
      <h1>Favorite Shows</h1>
      {favorites.length === 0 ? (
        <p>No favorite shows added yet.</p>
      ) : (
        <div className="show-card-container">
          {favorites.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
