import React, { useEffect, useState } from 'react';

function Scoreboard() {
  const [data, setData] = useState('');
  const [hello, setHello] = useState('');
  useEffect(() => {
    let pText = JSON.stringify(data[0].subject_title);
    setHello(pText);
    console.log(`hello ${hello}, Data ${data}`);
  }, [data]);

  async function displayReviews() {
    const responseJSON = await fetch('http://localhost:3001/api/bootcampers', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(responseJSON);
    let response = await responseJSON.json();
    console.log(`Data ${response.payload}`);
    setData(response.payload);
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
