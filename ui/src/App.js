// src/App.js
import React, { useState, useRef } from 'react';
import './App.css'; // This now imports Tailwind CSS
import axios from 'axios'; // Import axios for API calls

function App() {
  const [query, setQuery] = useState('');
  const [translation, setTranslation] = useState('KJV'); // Default translation set to KJV
  const [verses, setVerses] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState('');
  const abortController = useRef(null);
  const apiUrl = "https://bibleversesabout-wwcdk.ondigitalocean.app"

  const serverUrl = window.location.origin;
  axios.defaults.baseURL = serverUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (error) setError(''); // Clear error when user starts typing again
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const handleFindVersesClick = async () => {
    if (query.trim() === '') {
      setError('Please enter a topic.');
      return;
    }
    if (!streaming) {
      setStreaming(true);
      abortController.current = new AbortController();
      try {
        const response = await fetch(`${apiUrl}/api/getverses`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({query, translation}),
          signal: abortController.current.signal
        });

        console.log(response);
        let reader1 = response.body.getReader();
        let output = "";
        while (true) {
          const { done, value } = await reader1.read();
          if (done) break;
          output += new TextDecoder().decode(value);
          setVerses(output);
        }
        setStreaming(false);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Failed to fetch verses', error);
        }
        setStreaming(false); // Revert the button state on request failure
      }
    } else {
      abortController.current.abort();
      setStreaming(false);
      setVerses('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleFindVersesClick();
    }
  };

  return (
    <div className="App m-0 p-0">
      <div className="search-container mt-8 text-center px-4 md:px-0">
        <label htmlFor="queryField" className="text-2xl font-bold block mb-2">10 Bible Verses About:</label>
        
        <div className="flex flex-row justify-center items-center">
          <input
            type="text"
            id="queryField"
            name="queryField"
            placeholder="Love, Parenting, Forgiveness, etc."
            className={`text-lg p-4 w-full md:w-4/5 sm:w-11/12 min-w-[200px] border-2 ${error ? 'border-red-500' : 'border-gray-200'} rounded-md focus:border-gray-300 focus:outline-none`}
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <select
            id="translationSelect"
            name="translationSelect"
            className="ml-4 text-lg p-4 w-24 sm:w-1/6 border-2 border-gray-200 rounded-md focus:border-gray-300 focus:outline-none"
            value={translation}
            onChange={handleTranslationChange}
          >
            <option value="KJV">KJV</option>
            <option value="NIV">NIV</option>
            <option value="ESV">ESV</option>
            <option value="NASB">NASB</option>
            <option value="NLT">NLT</option>
            <option value="RSV">RSV</option>
            <option value="AMP">AMP</option>
          </select>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <br />
        <button
          onClick={handleFindVersesClick}
          className="text-lg p-4 mt-4 cursor-pointer bg-gray-200 text-black border-none rounded-md hover:bg-gray-300"
        >
          {streaming ? 'Cancel' : 'Find Verses'}
        </button>
      </div>
      {verses && (
        <div className="verses-container mt-4 mb-4 mx-4 p-6 bg-gray-100 rounded-lg shadow-inner border border-gray-300" dangerouslySetInnerHTML={{ __html: verses }}>
        </div>
      )}
    </div>
  );
}

export default App;
