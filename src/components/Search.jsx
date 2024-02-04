// // Search.js
// import React from "react";

// const Search = ({ searchText,  handleSearch }) => {
//   return (
//     <div className="flex w-1/2">
//       <input
//         type="text"
//         className="search-box mt-7 px-4 py-2 w-full border border-gray-300 rounded-l-md focus:border-black"
//         placeholder="Search your favorite..."
//         value={searchText}
//         onChange={(e) => {
//           searchText(e.target.value);
//         }}
//       />
//       <button
//         className="bg-gray text-black mt-7 px-4 py-2 rounded-r-md border border-gray-300 hover:bg-blue-100"
//         onClick={handleSearch}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default Search;
// Search.js
import React, { useState } from "react";

const Search = ({ searchText, handleSearch }) => {
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    searchText(e.target.value);
    setError(null); // Reset error when input changes
  };

  const handleSearchClick = async () => {
    try {
      await handleSearch();
    } catch (error) {
      setError("Error: Unable to fetch data. Please try again."); // Set error message
    }
  };

  return (
    <div className="flex w-1/2 mx-20">
      <input
        type="text"
        className="search-box mt-7 px-4 py-2 w-full border border-gray-300 rounded-l-3xl focus:border-black"
        placeholder="Search your favorite..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button
        className="bg-gray text-black mt-7 px-4 py-2 rounded-r-3xl border border-gray-300 hover:bg-blue-100"
        onClick={handleSearchClick}
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Search;
