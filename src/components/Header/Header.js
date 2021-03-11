import React from 'react';
import Image from '../../Images/field.jpg'

const Header = () => {
    const headerStyle = {
        height: '300px',
        width: '100%',
        backgroundImage: `url(${Image})`,
        color: 'orange',
        align: 'center',
        position: 'relative',
        textAlign: 'center'
    }

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <div style={headerStyle}>
            <h1 style={textStyle}>Football Freak League</h1>
        </div >
    );
};

export default Header;