import React, { useEffect, useState } from 'react';

function Scoreboard() {
  const [data, setData] = useState('');
  const [hello, setHello] = useState('');
  useEffect(() => {
    setHello(data);
    console.log(`hello ${hello}`);
  }, [data]);

  async function displayReviews() {
    const responseJSON = await fetch('http://localhost:3001/api/bootcampers');
    let response = await responseJSON.json();
    console.log(`Data ${JSON.stringify(response.payload[0])}`);
    setData(JSON.stringify(response.payload));
    //return dataStr;
  }

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
      <p>hi{hello}</p>
    </div>
  );
}

export default Scoreboard;
