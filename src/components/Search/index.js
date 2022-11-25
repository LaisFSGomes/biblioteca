import { useState } from "react";
import "./style.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const buscaInput = (event) => {
    setSearch(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    props.info(search);
  };

  return (
    <form onSubmit={submitSearch} className="Search">
      <input
        className="input-search"
        id="search"
        type="search"
        onChange={buscaInput}
      />
      <button className="button-search" type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
