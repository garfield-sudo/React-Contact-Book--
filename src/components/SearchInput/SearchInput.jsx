import React from "react";

const SearchInput = ({ filterLit }) => {
  function handleInput(e) {
    filterLit(e.target.value);
  }

  return (
    <div className="panel-block">
      <p className="control has-icons-left">
        <input
          onChange={handleInput}
          className="input"
          type="text"
          placeholder="Search"
        />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  );
};

export default SearchInput;
