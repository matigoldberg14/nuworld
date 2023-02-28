import React from 'react';
import { Accordion } from 'react-accessible-accordion';

import FaqItem from './Faq-item';

import FaqsJson from '../../data/faqs.json';

import './../../styles/Faqs/Faqs_Accordion.css';

const FaqsNewbies = () => {
    return (
        <Accordion className="accordion" allowZeroExpanded={true}>
            {FaqsJson.filter(e => e.for === 'newbies').map(faq => {
                return <FaqItem key={faq.id} title={faq.title} content={faq.content} />;
            })}
        </Accordion>
    );
};

export default FaqsNewbies;
