import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard';

import './Home.css';

function Home() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentEpisode, setCurrentEpisode] = useState(null); // State for the current playing episode
  const [visibleCount, setVisibleCount] = useState(10); // Number of shows to display initially

  useEffect(() => {
    fetch('https://podcast-api.netlify.app')
      .then(response => response.json())
      .then(data => {
        setShows(data);
        setLoading(false);
      });
  }, []);

  const genres = [...new Set(shows.map(show => show.genre))];

  const sortedShows = [...shows].sort((a, b) => {
    return sortOrder === 'A-Z'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  const filteredShows = sortedShows.filter(show => {
    const matchesSearchQuery = show.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === '' || show.genre === selectedGenre;
    return matchesSearchQuery && matchesGenre;
  });

  const visibleShows = filteredShows.slice(0, visibleCount); // Shows that are currently visible

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 10); // Show 10 more shows when button is clicked
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <h1>Podcast Shows</h1>

      <input
        type="text"
        placeholder="Search shows..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="filter-container">
        <label htmlFor="genre-filter">Filter by Genre:</label>
        <select
          id="genre-filter"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="genre-select"
        >
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="sort-buttons">
        <button onClick={() => setSortOrder('A-Z')}>Sort A-Z</button>
        <button onClick={() => setSortOrder('Z-A')}>Sort Z-A</button>
      </div>

      <div className="show-card-container">
        {visibleShows.map(show => (
          <div key={show.id}>
            <ShowCard show={show} />
            {show.episodes && show.episodes.length > 0 && (
              <button onClick={() => setCurrentEpisode(show.episodes[0])}>
                Play First Episode
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredShows.length && (
        <div className="show-more-container">
          <button onClick={handleShowMore} className="show-more-button">
            Show More
          </button>
        </div>
      )}

      {/* Render the audio player bar if an episode is selected */}
      {currentEpisode && (
        <MyAudioPlayer src={currentEpisode.audio} title={currentEpisode.title} />
      )}
    </div>
  );
}

export default Home;
