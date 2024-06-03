// src/App.js
import React, { useState } from 'react';
import './App.css'; // This now imports Tailwind CSS
import axios from 'axios'; // Import axios for API calls

function App() {
  const [query, setQuery] = useState('');
  const [verses, setVerses] = useState('');
  const [streaming, setStreaming] = useState(false);

  const serverUrl = window.location.origin;
  axios.defaults.baseURL = serverUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFindVersesClick = async () => {
    if (!streaming) {
      setStreaming(true);
      try {
        const response = await fetch("/api/getverses", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({query})
        });


        console.log(response);
        let reader1 = response.body.getReader();
        let output = "";
        while (true) {
          const { done, value } = await reader1.read();
          output += new TextDecoder().decode(value);
          setVerses(output);

          if (done) {
            setStreaming(false);
            break;
          }
          console.log(value);
        }
      } catch (error) {
        console.error('Failed to fetch verses', error);
        setStreaming(false); // Revert the button state on request failure
      }
    } else {
      setStreaming(false);
      setVerses('');
    }
  };

  return (
    <div className="App">
      <div className="search-container mt-8 text-center">
        <label htmlFor="queryField" className="text-2xl font-bold block mb-2">10 Bible Verses About:</label>
        <input
          type="text"
          id="queryField"
          name="queryField"
          placeholder="Love, Parenting, Forgiveness, etc."
          className="text-lg p-4 w-4/5 min-w-[300px] border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
          value={query}
          onChange={handleInputChange}
        />
        <br />
        <button
          onClick={handleFindVersesClick}
          className="text-lg p-4 mt-4 cursor-pointer bg-gray-200 text-black border-none rounded-md hover:bg-gray-300"
        >
          {streaming ? 'Cancel' : 'Find Verses'}
        </button>
      </div>
      {verses && (
        <div className="verses-container mt-4 mb-4 mx-4 p-6 bg-gray-100 rounded-lg shadow-inner border border-gray-300">
          <p className="text-lg font-serif leading-relaxed text-gray-800">{verses}</p>
        </div>
      )}
    </div>
  );
}

export default App;

