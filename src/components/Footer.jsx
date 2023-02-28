import React from 'react';

import FooterTop from './../assets/bg_body_top.png';
import Icon from './generics/Icons-list';
import Logo from './generics/Logo';

import IconJson from '../data/icons.json';

import analyticsEventTracker from '../ga';

import './../styles/Footer.css';

const Footer = () => {
    const footer = IconJson.footer;
    return (
        <footer className="footer">
            <div className="footer-top">
                <img width="100%" height="auto" src={FooterTop} alt="footerTop" />
            </div>
            <div className="footer-section">
                <div className="logo-footer">
                    <Logo />
                </div>
                <div className="icons-list-footer">
                    {footer.map((i) => {
                        return (
                            <a
                                key={i.id}
                                className="icon-link-footer"
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
                <p className="nu-world-rights">© 2022 Nu World | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
