import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SeasonDetails() {
  const { id } = useParams(); // Retrieve the season ID from the URL
  const [season, setSeason] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the season details using the ID
    fetch(`https://api.example.com/seasons/${id}`) // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setSeason(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!season) {
    return <div>Season not found</div>;
  }

  return (
    <div>
      <h1>{season.title}</h1>
      <img src={season.image} alt={season.title} />
      <p>{season.description}</p>
      {/* Display additional season details as needed */}
    </div>
  );
}

export default SeasonDetails;
