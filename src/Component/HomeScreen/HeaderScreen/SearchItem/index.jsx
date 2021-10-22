import React from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import "../../home.scss";
SearchItem.propTypes = {};

function SearchItem(props) {
  return (
    <div className="search-text">
      <div className="search-text-item">
        <div className="input-search">
          <input
            type="text"
            placeholder="Search"
            className="input-search-item"
          />
        </div>
        <div className="icon-search">
          <AiOutlineSearch  className = 'icon-page search'/>
        </div>
      </div>
      <div className="icon-micro">
        <FaMicrophone  className = 'icon-page micro'/>
      </div>
    </div>
  );
}

export default SearchItem;
