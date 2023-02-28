import React from 'react';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

import './../../styles/Faqs/Faq_Item.css';

const FaqItem = ({ title, content }) => {
    return (
        <AccordionItem className="accordion-item">
            <AccordionItemState>
                {({ expanded }) =>
                    expanded ? (
                        <AccordionItemHeading
                            className={'accordion-item-heading-expanded'}
                            style={{ cursor: 'pointer' }}
                        >
                            <AccordionItemButton className={'accordion-item-button'}>
                                <p> {title} </p>
                                <FaMinus style={{ color: 'white' }} />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    ) : (
                        <AccordionItemHeading
                            className={'accordion-item-heading'}
                            style={{ cursor: 'pointer' }}
                        >
                            <AccordionItemButton className={'accordion-item-button'}>
                                <p> {title} </p>
                                <FaPlus style={{ color: 'white' }} />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                    )
                }
            </AccordionItemState>

            <AccordionItemPanel className={'accordion-panel'}>
                {content.map(c => {
                    if (c.content === '') {
                        return <br key={c.id} />;
                    } else {
                        return (
                            <p key={c.id} className="faq_description">
                                {c.content}
                            </p>
                        );
                    }
                })}
            </AccordionItemPanel>
        </AccordionItem>
    );
};

export default FaqItem;
