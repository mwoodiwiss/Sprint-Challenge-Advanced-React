import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsDiv from './components/CardsDiv';
import './App.css';

const App = () => {
  const [dataArray, setDataArray] = useState([{}])

  useEffect(() => {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
      console.log(response);
      setDataArray(response.data)})
      .catch(err => console.log(err))
  }, []) 
 
  return (
    <div className='App'>
      <h1 className='Header'>Players</h1>      
      <CardsDiv data={dataArray} />    
    </div>
  );
}

export default App;
