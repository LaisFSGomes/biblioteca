import './style.css';

const Search = (props) => {
  
  return(
    <form onSubmit={props.submitSearch}  className="Search" >
      <input className="input-search"
        id='search'
        type = "search"
        onChange={props.buscaInput}
      />

      <button className="button-search" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;