import React from 'react';
import PropTypes from 'prop-types';
import Header from './HeaderScreen';

HomeScreen.propTypes = {
    
};

function HomeScreen(props) {
    return (
        <div className = "home_screen">
            <Header />
        </div>
    );
}

export default HomeScreen;