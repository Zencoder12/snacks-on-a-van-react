import React from "react";

const SearchBar = ({ onChange, onClear, onSearch, value }) => {
  return (
    <div className="p-3 mb-3 p-xxl-5 card shadow-sm h-30">
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control text-uppercase border"
          placeholder="Search order number"
          aria-label="order number"
          aria-describedby="button-addon2"
          value={value}
          onChange={(e) => onChange(e)}
        />
        <button
          onClick={onClear}
          className="btn btn-outline-secondary border"
          type="button"
        >
          Clear
        </button>
        <button
          onClick={onSearch}
          className="btn btn-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
