import React, { useEffect, useState, useCallback } from 'react';

function Scoreboard() {
  const [data, setData] = useState('');
  const [hello, setHello] = useState('');

  const fetchData = async () => {
    const responseJSON = await fetch('http://localhost:3001/api/bootcampers', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    let response = await responseJSON.json();
    //console.log(`Data2 ${JSON.stringify(response)}`);
    console.log('Data', response);
    setData(response.payload);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function displayReviews() {
  //   const responseJSON = await fetch('http://localhost:3001/api/bootcampers', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  //   console.log(responseJSON);
  //   let response = await responseJSON.json();
  //   console.log(`Data ${response.payload}`);
  //   setData(response.payload);
  //   //return dataStr;
  // }
  // let pText = data[0].subject_title;
  // setHello(pText);
  //console.log(`hello ${hello}, Data ${data}`);

  return (
    <div>
      {/* Scoreboard */}
      <button onClick={fetchData}>Click Me</button>
      <p>hi{data.length > 0 && JSON.stringify(data)}</p>
    </div>
  );
}

export default Scoreboard;

/*
<button
        onClick={() => {
          displayReviews();
        }}
      >
        Display
      </button>
*/
