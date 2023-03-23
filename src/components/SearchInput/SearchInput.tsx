import searchIcon from "../../assets/dashboard/search-icon.svg";
import { useState } from "react";
import classes from "./SearchInput.module.scss";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputChangeHandler = (e: { target: { value: string } }) => {
    setSearchInput(e.target.value);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // search for input
  };

  return (
    <form onSubmit={submitSearch} className={classes.form}>
      <input
        type="text"
        value={searchInput}
        onChange={searchInputChangeHandler}
        placeholder={"Search for anything"}
        className={classes.input}
      />
      <button type="submit" className={classes.btn}>
        <img src={searchIcon} alt={"search-icon"} />
      </button>
    </form>
  );
};

export default SearchInput;
