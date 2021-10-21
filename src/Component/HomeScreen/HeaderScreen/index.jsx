import React from 'react';
import PropTypes from 'prop-types';
import HeaderNavbar from './NavbarHeader';
import SearchItem from './SearchItem';
import NotificationItem from './Notification';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className='header' >
        <HeaderNavbar />
        <SearchItem />
        <NotificationItem />
        </div>
    );
}

export default Header;