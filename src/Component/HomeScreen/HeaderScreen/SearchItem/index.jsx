import React from "react";
import PropTypes from "prop-types";
import img1 from "../../../../Assets/search.png";
import img2 from "../../../../Assets/micro.png";

import "../../home.scss";
SearchItem.propTypes = {};

function SearchItem(props) {
  return (
    <div className ='search-text'>
      <div className="search-text-item">
        <div className="input-search">
          <input
            type="text"
            placeholder="Search"
            className="input-search-item"
          />
        </div>
        <div className="icon-search">
          <img src={img1} alt="img1" className="img-icon-search" />
        </div>
      </div>
      <div className="icon-micro">
        <img src={img2} alt="img1" className="img-icon" />
      </div>
    </div>
  );
}

export default SearchItem;
