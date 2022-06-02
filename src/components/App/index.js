import React, { useState, useEffect } from "react";
import './style.css';
import List from '../List/index.js';
import Search from '../Search/index.js';
import api from '../../api.js';


const App = () => {

  const [books, setBooks] = useState('');

  const fetchData = async(p) => {
    const response = await api.get('search', {
      params: {
        query: p
      }
    });

    setBooks(response?.data);
  }

 
  useEffect(()=>{
    fetchData();
    
  }, []);


  return (
    <div className="App">
      <h1>My Library</h1>
      <Search info = {fetchData} />
      <List list={books.hits} />

    </div>
  );
}

export default App;

