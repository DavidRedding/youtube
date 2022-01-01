import React from "react";

const SearchBar = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log(`cordaeeeeee`);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input placeholder={`try "charlie bit my finger" `} />
          <button
            style={{ marginTop: "1rem" }}
            type="submit"
            className="ui button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
