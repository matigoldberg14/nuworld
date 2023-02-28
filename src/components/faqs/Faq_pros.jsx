import React from 'react';
import { Accordion } from 'react-accessible-accordion';

import FaqItem from './Faq-item';

import FaqsJson from '../../data/faqs.json';

import './../../styles/Faqs/Faqs_Accordion.css';

const FaqsPro = () => {
    return (
        <Accordion className="accordion pros" allowZeroExpanded={true}>
            {FaqsJson.filter(e => e.for === 'pros').map(faq => {
                return <FaqItem key={faq.id} title={faq.title} content={faq.content} />;
            })}
        </Accordion>
    );
};

export default FaqsPro;
