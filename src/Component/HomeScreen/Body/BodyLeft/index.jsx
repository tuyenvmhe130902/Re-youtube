import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { MdVideoLibrary,MdOutlineSmartDisplay } from "react-icons/md";
import { BsFillCollectionPlayFill,BsSoundwave } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { BiTime,BiLike } from "react-icons/bi";

const Home1 = [
  {
    id: 1,
    icon: <AiFillHome className='icon-page'/>,
    name: "Home",
  },
  {
    id: 2,
    icon: <FaRegCompass className='icon-page'/>,
    name: "Explore",
  },
  {
    id: 3,
    icon: <BsFillCollectionPlayFill className='icon-page'/>,
    name: "Subcriptions",
  },
];

const Library = [
  {
    id:1,
    icon: <MdVideoLibrary className = 'icon-page'/>,
    name: "Library",
  },
  {
    id:2,
    icon: <GrHistory className = 'icon-page'/>,
    name: "History",
  },
  {
    id:3,
    icon: <MdOutlineSmartDisplay className = 'icon-page'/>,
    name: "Your videos",
  },
  {
    id:4,
    icon: <BiTime className = 'icon-page'/>,
    name: "What later",
  },
  {
    id:5,
    icon: <BiLike className = 'icon-page'/>,
    name: "Like videos",
  },
  {
    id:6,
    icon: <BsSoundwave className = 'icon-page'/>,
    name: "Mix - Hoc lap trinh cho nguoi moi bat dau",
  },
];

const Subcriptions = [
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
];

const moreForm = [
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
];

const Setting = [
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
  {
    icon: "url(../../../../Assets/avatar.png)",
    name: "Subcriptions",
  },
];

BodyLeft.propTypes = {};

function BodyLeft(props) {
  return (
    <div className="body-left">
      {Home1.map((home2) => (
        <div key={home2.id} className="body-left-home">
          <div className="icon-page left-home">{home2.icon}</div>
          {/* `if(home2.id === 1){
            document.getElementsByClassName('icon-page').classList.add('active-page')
          }` */}
          <div className = "left-home-text">{home2.name}</div>
        </div>
      ))}
      <div className = 'border-bottom'>
        <hr  style={{width:200, opacity:0.5}}></hr>
      </div>
      {
        Library.map((library) =>(
          <div key={library.id} className="body-left-home">
          <div className="icon-page left-home">{library.icon}</div>
          <div className = "left-home-text">{library.name}</div>
        </div>
        ))
      }
      <div className = 'border-bottom'>
        <hr  style={{width:200, opacity:0.5}}></hr>
      </div>
      
    </div>
  );
}

export default BodyLeft;
