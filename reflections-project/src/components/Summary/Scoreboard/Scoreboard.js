import React, { useEffect, useState, useCallback } from "react";

function Scoreboard() {
  const [data, setData] = useState("");
  const [hello, setHello] = useState("");

  const fetchData = async () => {
    const responseJSON = await fetch("http://localhost:3001/api/bootcampers", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await responseJSON.json();
    setData(response.payload);
  };

  const organiseData = () => {
    let scoreArray = [];

    console.log(data);
  };

  return (
    <div>
      {/* Scoreboard */}
      <button onClick={fetchData}>Click Me</button>
      <p>{data.length > 0 && organiseData()}</p>
      <h2>{data.length > 0 && data[0].subject_title}</h2>
      <ol>
        <li>Score:{data.length > 0 && data[0].score}</li>
        <li>Score:placeholder</li>
      </ol>
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
