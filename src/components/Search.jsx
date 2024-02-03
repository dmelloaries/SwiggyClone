// Search.js
import React from "react";

const Search = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <div className="flex w-1/2">
      <input
        type="text"
        className="search-box px-4 py-2 w-full rounded-l-md focus:border-black"
        placeholder="Search your favorite..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        className="bg-gray text-black px-4 py-2 rounded-r-md hover:bg-blue-100"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
