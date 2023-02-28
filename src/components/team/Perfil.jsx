import React, { useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Modal from 'react-modal';
import analyticsEventTracker from '../../ga';

const Perfil = ({ img, name, role, description, display }) => {
    const [isOpen, setIsOpen] = useState(false);
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

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li
            className="person"
            onClick={() => {
                analyticsEventTracker(name);
                toggleModal();
            }}
            style={{ cursor: 'pointer' }}
        >
            {display === 'Mobile' ? null : (
                <Modal
                    className="modal-dialog"
                    isOpen={isOpen}
                    appElement={document.getElementById('app')}
                    onRequestClose={toggleModal}
                    overlayClassName="overlay"
                >
                    <div className="modal">
                        <div className="modal-section">
                            <div className="modal-img-section">
                                <img
                                    width="100%"
                                    height="auto"
                                    className="modal-img"
                                    src={img}
                                    alt={name}
                                />
                            </div>
                            <div className="modal-description-section">
                                <p className="modal-title">{name}</p>
                                <p className="modal-role">{role}</p>
                                <hr className="separator" />
                                <p className="modal-description">{description}</p>
                            </div>
                        </div>
                        <div className="modal-close">
                            <IoIosCloseCircleOutline className="close-icon" onClick={toggleModal} />
                        </div>
                    </div>
                </Modal>
            )}
            <img
                width={width <= 768 ? '60%' : '100%'}
                height="auto"
                className="person-img"
                src={img}
                alt={name}
            />
            <p className="person-title"> {name} </p>
            <p className="person-role"> {role} </p>
        </li>
    );
};

export default Perfil;
