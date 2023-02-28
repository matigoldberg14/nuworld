import React from 'react';

import PassportImg from './../../assets/Passport.png';

import './../../styles/open-letter/Passport.css';

const Passport = () => {
    return (
        <div className="voluntarios-ext">
            <div className="voluntarios">
                <div className="voluntarios-description">
                    <div className="voluntarios-title">
                        <div className="ten-olamite">
                            <p className="ten-thousand">3,000</p>
                        </div>
                        <p className="passports">High quality NFTs at ZERO COST.</p>
                    </div>
                    <p className="voluntarios-text">Why FREE MINT?</p>
                    <p className="voluntarios-text">
                        We have the philantropic purpose of delivering HiFi, accesible & sustainable
                        assets in a comunity accustomed to LoFi under-deliveries even in paid
                        mints.  Or haven't you experienced a rug before?
                    </p>
                </div>
                <div className="voluntarios-passport">
                    <img
                        width="auto"
                        height="auto"
                        className="passport-img"
                        src={PassportImg}
                        alt="Passport"
                    />
                </div>
            </div>
        </div>
    );
};

export default Passport;
