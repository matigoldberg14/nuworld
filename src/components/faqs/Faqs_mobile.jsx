import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa';

import FaqsNewbies from './Faq_newbies';
import FaqsPros from './Faq_pros';

import '../../styles/Faqs/Faqs_mobile.css';

const FaqsMobile = () => {
    return (
        <div className="faqs_mobile">
            <div className="faqs-mobile-title">
                <p>FAQ'S</p>
            </div>
            <Accordion className="accordion-mobile" allowZeroExpanded={true}>
                <AccordionItem className="faqs-mobile-item-newbies">
                    <AccordionItemState>
                        {({ expanded }) =>
                            expanded ? (
                                <AccordionItemHeading
                                    className={'accordion-item-heading-expanded-mobile'}
                                >
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR NEWBIES </p>
                                        <FaMinus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            ) : (
                                <AccordionItemHeading className={'accordion-item-heading-mobile'}>
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR NEWBIES </p>
                                        <FaPlus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            )
                        }
                    </AccordionItemState>

                    <AccordionItemPanel className={'accordion-panel-mobile'}>
                        <FaqsNewbies />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className={'faqs-mobile-item-pros'}>
                    <AccordionItemState>
                        {({ expanded }) =>
                            expanded ? (
                                <AccordionItemHeading
                                    className={'accordion-item-heading-expanded-mobile'}
                                >
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR PROS </p>
                                        <FaMinus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            ) : (
                                <AccordionItemHeading className={'accordion-item-heading-mobile'}>
                                    <AccordionItemButton className={'accordion-item-button-mobile'}>
                                        <p> FOR PROS </p>
                                        <FaPlus style={{ color: 'white' }} />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                            )
                        }
                    </AccordionItemState>

                    <AccordionItemPanel className={'accordion-panel-mobile'}>
                        <FaqsPros />
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default FaqsMobile;
