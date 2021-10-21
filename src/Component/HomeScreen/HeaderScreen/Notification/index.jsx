import React from "react";
import PropTypes from "prop-types";
import "../../home.scss";
import img2 from "../../../../Assets/video.png";
import img3 from "../../../../Assets/navbar2.png";
import img4 from "../../../../Assets/noti.png";
import img5 from "../../../../Assets/avatar.png";

NotificationItem.propTypes = {};
function NotificationItem(props) {
  return (
    <div className="list-notification">
        <img src={img2} alt="img1" className="img-icon" />
        <img src={img3} alt="img1" className="img-icon" />
        <img src={img4} alt="img1" className="img-icon" />
        <img src={img5} alt="img1" className="img-avatar-icon" />
    </div>
  );
}

export default NotificationItem;
