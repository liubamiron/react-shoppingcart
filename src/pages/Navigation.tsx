import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/" style={{color: "black"}}>Home</NavLink>
            <NavLink to="/cart" style={{color: "blue", padding: "10px"}}>Cart</NavLink>
        </div>
    );
}

export default Navigation;