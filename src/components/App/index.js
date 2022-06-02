import React, {useState, useEffect} from 'react';
import './style.css';
import List from '../List/index.js';
import Search from '../Search/index.js';
import Footer from '../Footer/index.js';
import api from '../../utils/api.js';

const App = (props) => {
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
    <div className='App'>
      <h1 className='title'>{props.title}</h1>
      <Search info = {fetchData} />
      <List list={books.hits} />
      <Footer info={props.footer} />
    </div>
  );
}
export default App;

