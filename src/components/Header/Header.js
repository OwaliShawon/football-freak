import React from 'react';

const Header = () => {
    const headerStyle = {
        height: '400px',
        width: '100%',
        // backgroundImage: 'url('')',
        backgroundColor: 'red',

    }
    return (
        <div style={headerStyle}>
            <h1>Football Freak League</h1>
        </div >
    );
};

export default Header;