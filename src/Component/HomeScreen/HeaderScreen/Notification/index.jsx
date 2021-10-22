import React from "react";
import PropTypes from "prop-types";
import "../../home.scss";
import { RiVideoAddFill } from "react-icons/ri";
import { GrApps } from "react-icons/gr";
import { BsBell } from "react-icons/bs";
import img5 from "../../../../Assets/avatar.png";

NotificationItem.propTypes = {};
function NotificationItem(props) {
  return (
    <div className="list-notification">
        <RiVideoAddFill className= 'icon-page noti'/>
        <GrApps className= 'icon-page noti' />
        <BsBell className= 'icon-page noti' />
        <img src={img5} alt="img1" className="img-avatar-icon" />
    </div>
  );
}

export default NotificationItem;
