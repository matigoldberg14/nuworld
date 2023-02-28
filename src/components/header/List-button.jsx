import React from 'react';
import { Link } from 'react-scroll/modules';

import './../../styles/header/List-button.css';

const ListButton = ({ name, section, setActiveMenu }) => {
    return (
        <li className={'list-item'}>
            <Link
                className="list-button"
                href="/#"
                activeClass="active"
                to={section}
                spy={true}
                smooth={true}
                onClick={() => setActiveMenu(false)}
            >
                {name}
            </Link>
        </li>
    );
};

export default ListButton;
