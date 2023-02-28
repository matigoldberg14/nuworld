import React, { useState } from 'react';

import FaqsNewbies from './Faq_newbies';
import FaqsPros from './Faq_pros';
import LogoNU from './../../assets/Isotipo NuWorld Blanco.png';
import Nekevah from './../../assets/Nekevah para FAQ.png';
import Professor from './../../assets/Dr Professor para FAQ.png';

import '../../styles/Faqs/Faqs_desktop.css';

const FaqsDesktop = () => {
    const [faqs_for, setFor] = useState('pros');

    return (
        <div className="faqs_desktop">
            <div className="faqs-principal">
                <div className="faqs-desktop-title">
                    <p>FREQUENTLY ASKED QUESTIONS</p>
                </div>
                <img
                    width="25%"
                    height="auto"
                    className="faqs-background"
                    src={LogoNU}
                    alt="FaqsNU"
                />
                <div className="faqs-banner">
                    <div
                        className="faqs-character"
                        onClick={() => setFor('newbies')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={'faqs-professor-principal-' + faqs_for}>
                            <p className={'faqs-title-professor-' + faqs_for}>FOR NEWBIES</p>
                            <img
                                width="40%"
                                height="auto"
                                className="faqs-professor-img"
                                src={Professor}
                                alt="Professor"
                            />
                        </div>
                        <div className={'faqs-name-professor-' + faqs_for}>
                            <p className="faqs-name">Dr. Professor</p>
                        </div>
                        <div className={'rectangle-professor-' + faqs_for}></div>
                    </div>
                    <div
                        className="faqs-character"
                        onClick={() => setFor('pros')}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={'faqs-nekevah-principal-' + faqs_for}>
                            <p className={'faqs-title-nekevah-' + faqs_for}>FOR PROS</p>
                            <img
                                width="36.065%"
                                height="auto"
                                className="faqs-nekevah-img"
                                src={Nekevah}
                                alt="Nekevah"
                            />
                        </div>
                        <div className={'faqs-name-nekevah-' + faqs_for}>
                            <p className="faqs-name">Cap. Nekevah</p>
                        </div>
                        <div className={'rectangle-nekevah-' + faqs_for}></div>
                    </div>
                </div>
            </div>
            {faqs_for === 'newbies' ? <FaqsNewbies /> : <FaqsPros />}
        </div>
    );
};

export default FaqsDesktop;
