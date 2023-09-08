import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearches() {
  const handleSearchButtonClick = () => {
    // Redirect to the desired URL when the search button is clicked
    window.location.href = "https://recipes.timesofindia.com/recipes";
  };

  return (
    <div className="previous-searches section">
      <h2>Previous Searches</h2>
      <div className="previous-searches-container">
        {["pizza", "burger", "cookies", "juice", "biriyani", "salad", "ice cream", "lasagna", "pudding", "soup"].map(
          (search, index) => (
            <div key={index} style={{ animationDelay: index * 0.1 + "s" }} className="search-item">
              {search}
            </div>
          )
        )}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search ..." />
        <button className="btn" onClick={handleSearchButtonClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
