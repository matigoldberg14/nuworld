import React, { useState, useEffect } from 'react';

import FaqsDesktop from './Faqs_desktop';
import FaqsMobile from './Faqs_mobile';

import './../../styles/Faqs/Faqs.css';

const Faqs = () => {
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

    return <div className="faqs">{width <= 768 ? <FaqsMobile /> : <FaqsDesktop />}</div>;
};

export default Faqs;
