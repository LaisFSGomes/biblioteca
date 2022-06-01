import React, { useState, useEffect } from "react";
import './style.css';
import List from '../List/index.js';
import Search from '../Search/index.js';
import api from '../../api.js';


const App = () => {

  const [books, setBooks] = useState('');

  useEffect(()=>{
    const fetchData = async() => {
      const response = await api.get(`https://hn.algolia.com/api/v1/search?query=`)
      setBooks(response?.data);
    }
    fetchData();
    
  }, []);

  return (
    <div className="App">
      <h1>My Library</h1>
      <Search />
      <List list={books.hits} />

    </div>
  );
}

export default App;

