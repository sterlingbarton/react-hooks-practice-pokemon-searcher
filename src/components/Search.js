import React from "react";

function Search({searchQuery, handleChange}) {
  
 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchQuery} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
