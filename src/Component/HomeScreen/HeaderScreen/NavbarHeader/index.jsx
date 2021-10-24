import React from 'react';
import navbar1 from '../../../../Assets/navbar.png'
import logo from '../../../../Assets/youtube.png'
import PropTypes from 'prop-types';
import '../../home.scss'

HeaderNavbar.propTypes = {
    
};

function HeaderNavbar(props) {
    return (
    <div className = "nav-header">
        <div className = 'icon-navbar_1'>
            <img className="icon-navbar" src = {navbar1} />
        </div>
        <div className = 'icon-navbar_2'>
            <img className="icon-logo" src = {logo}/>
        </div>
    </div>
       
    );
}

export default HeaderNavbar;