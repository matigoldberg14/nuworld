import React from 'react';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

import Opensea from './../../assets/OpenSea.png';

import './../../styles/generics/Icons-list.css';

const Icon = i => {
    let component = null;
    if (i.icon === 'Opensea') {
        component = (
            <img width="100%" height="auto" className="icon-img" src={Opensea} alt="icon" />
        );
    } else if (i.icon === 'Discord') {
        component = <FaDiscord className="app-icon-title" />;
    } else if (i.icon === 'Twitter') {
        component = <FaTwitter className="app-icon-title" />;
    } else if (i.icon === 'Instagram') {
        component = <FaInstagram className="app-icon-title" />;
    }
    return component;
};

export default Icon;
