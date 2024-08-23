import React from 'react';
import './ShowCard.css';
import { addFavoriteShow, removeFavoriteShow, isFavorite } from '../Utils/Favorites';

function ShowCard({ show }) {
  const handleAddToFavorites = () => {
    addFavoriteShow(show);
  };

  const handleRemoveFromFavorites = () => {
    removeFavoriteShow(show.id);
  };

  const isFav = isFavorite(show.id);

  return (
    <div className="show-card">
      <img src={show.image} alt={show.title} className="show-card-image" />
      <div className="show-card-content">
        <h3 className="show-card-title">{show.title}</h3>
        <p className="show-card-seasons">Seasons: {show.seasons}</p>
        <p className="show-card-genres">Genres: {show.genres.join(', ')}</p>
        <p className="show-card-updated">
          Updated: {new Date(show.updated).toLocaleDateString()}
        </p>
        {isFav ? (
          <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
        ) : (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        )}
      </div>
    </div>
  );
}

export default ShowCard;
