import React from 'react';
import './style.css'

import imageLogo from '../../assets/images/burger.png'

const Logo = () => (
    <div className="Logo">
        <img src={imageLogo} alt="MyBurger"></img>
    </div>
)

export default Logo;