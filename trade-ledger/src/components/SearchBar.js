import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearch = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearch} type="submit" value="Search" />
    </form>
  );
};

export default Search;
