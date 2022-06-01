import './style.css';

const Search = (props) => {
  return(
    <div  className="Search" >
      <input className="input-search"
        id='search'
        type = "search"
        // onChange={props.onInputChange}
      />

      <button className="button-search" >
        Search
      </button>
    </div>
  );
}

export default Search;