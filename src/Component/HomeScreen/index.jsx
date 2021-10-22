import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderScreen';
import Body from './Body';

HomeScreen.propTypes = {
    
};

function HomeScreen(props) {
    return (
        <div className = "home_screen">
            <Header />
            <Body />
        </div>
    );
}

export default HomeScreen;