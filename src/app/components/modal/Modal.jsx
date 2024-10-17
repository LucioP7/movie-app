import React, { useState, useEffect, useRef } from 'react';

export default function Modal({ id, active, children }) {
    const [isActive, setIsActive] = useState(active);

    useEffect(() => {
        setIsActive(active);
    }, [active]);

    return (
        <div id={id} className={`modal ${isActive ? 'active' : ''}`}>
            {children}
        </div>
    );
}

export const ModalContent = ({ onClose, children }) => {
    // useRef se utiliza para referencias mutables a un elemento del DOM

    const contentRef = useRef(null);

    // closeModal utiliza contentRef para acceder al elemento DOM y eliminar la clase 
    //active del elemento padre, cerrando así el moda
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (onClose) onClose();
    };

    return (
        <div ref={contentRef} className="modal-content">
            {children}
            <div className="modal-close" onClick={closeModal}>
                <i className='bx bx-x'></i>
            </div>
        </div>
    );
};

