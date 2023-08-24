import React, { useState, useEffect } from 'react';
import './Quote.css';

const apiKey = process.env.REACT_APP_API_KEY;

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const headers = {
          'X-Api-Key': apiKey,
        };

        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          headers,
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) {
    return (
      <div className="bubble-spinner">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>
    );
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={`${item.id}`} className="quote-box">
          <div className="quote">
            {item.quote}
          </div>
          <div className="author">
            <strong>{item.author}</strong>
          </div>
        </li>
      ))}

    </ul>
  );
}

export default Quotes;
