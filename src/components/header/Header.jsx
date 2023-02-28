import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Icon from '../generics/Icons-list';
import ListButton from './List-button';
import LogoImg from './../../assets/Logo.png';

import IconJson from '../../data/icons.json';
import sectionButtons from '../../data/sections.json';

import analyticsEventTracker from '../../ga';

import '../../styles/header/Header.css';

const Header = () => {
    const header = IconJson.header;
    const [activeMenu, setActiveMenu] = useState(false);
    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <header className="header">
            <div className={width <= 768 ? 'mobile-top-' + activeMenu : 'desktop-top'}>
                <div className="navbar">
                    <div className="logo-header">
                        <a className="logo-link" href="/">
                            <img width="100%" height="auto" src={LogoImg} alt="Logo" />
                        </a>
                    </div>
                    <div className="menu-icon">
                        {activeMenu ? (
                            <FaTimes onClick={() => setActiveMenu(false)} />
                        ) : (
                            <FaBars onClick={() => setActiveMenu(true)} />
                        )}
                    </div>
                </div>
                <div className="buysoon-now">
                    <a
                        href="https://opensea.io/es/collection/nu-world-free-mint"
                        className="buysoon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        OPENSEA
                    </a>
                </div>
                <div className={width <= 768 ? 'mobile-menu-' + activeMenu : 'desktop-menu'}>
                    <div className={activeMenu ? 'section-buttons-active' : 'section-buttons'}>
                        <ul className="list-buttons">
                            {sectionButtons.map((e) => {
                                return (
                                    <ListButton
                                        key={e.id}
                                        name={e.title}
                                        setActiveMenu={setActiveMenu}
                                        section={e.section}
                                    />
                                );
                            })}
                        </ul>
                    </div>

                    <div className={activeMenu ? 'icons-buttons-active' : 'icons-buttons'}>
                        <div className="buysoon">
                            <a
                                href="https://opensea.io/es/collection/nu-world-free-mint"
                                className="buysoon-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OPENSEA
                            </a>
                        </div>
                        <div className="icons-list-header">
                            {header.map((i) => {
                                return (
                                    <a
                                        key={i.id}
                                        className="icon-link-header"
                                        href={i.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => analyticsEventTracker(i.icon)}
                                    >
                                        <Icon icon={i.icon} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
