import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/negative")
    .then((r) => r.json())
    .then((data) => setData(data))
  },[])

  data.negative === undefined ? console.log("loading...") : console.log(data.negative)
  return (
    <div className='App'>
      {data.negative === undefined ? 
      <p>Loading...</p> 
    : 
    data.negative.map((data, index) => (
      <h1 key={index}>{data.name}</h1>
    ))}
    </div>
  )
}

export default App