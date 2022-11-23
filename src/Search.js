import React, { useState } from "react";

function Search({search, setSearch}) {
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search for a Legend:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;