// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [suggestedColor, setSuggestedColor] = useState('');

  const fetchSuggestion = async () => {
    const response = await fetch('https://daily-dress-color-suggestion-for-women.onrender.com/getSuggestion');
    const data = await response.json();
    setSuggestedColor(data.color);
  };

  return (
    <div className="App">
      <h1>Daily Dress Color Suggestion</h1>
      <div>
        <button onClick={fetchSuggestion}>Get Suggestion</button>
      </div>
      {suggestedColor && (
        <div>
          <h2>Today's Suggested Color:</h2>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: suggestedColor,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default App;
