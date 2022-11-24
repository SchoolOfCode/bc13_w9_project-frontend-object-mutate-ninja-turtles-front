import React from 'react';

async function displayReviews() {
  const response = await fetch('http://localhost:3001/api/bootcampers');
  let data = await response.json();
  console.log(`Data ${JSON.stringify(data)}`);
  return data;
}

function Scoreboard(data) {
  return (
    <div>
      Scoreboard
      <button
        onClick={() => {
          displayReviews();
        }}
      >
        Display
      </button>
      <p>put data here</p>
    </div>
  );
}

export default Scoreboard;
