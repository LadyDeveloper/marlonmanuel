import React, { useState } from "react";

const Search = () => {
  const [hidden, setHidden] = useState(false);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);

    if (inputText.length > 1) {
      setHidden(true);
      // console.log(inputText.length)
    } else {
      setHidden(false);
    }
  }

  return (
    <div>
      <form>
        <i className="fa fa-search fa-2x"></i>
        <label>
          <input className="search-house"
            onChange={handleChange}
            type="text"
            placeholder="search"
            value={inputText}
          />
          {hidden ? <i id="closeIcon" className="fa fa-close fa-2x"></i> : ""}
        </label>
      </form>
    </div>
  );
};

export default Search;
