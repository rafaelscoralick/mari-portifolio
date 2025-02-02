import React, { useEffect, useState } from 'react';
import './style.scss';

interface ModalProps {
  children: React.ReactNode;
  trigger: React.ReactNode; // O elemento que abre a modal (botão, link, etc.)
}

export default function Modal({ children, trigger }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenClass, setIsOpenClass] = useState('close');
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    setTimeout(() => {
      setIsOpenClass('open');
    }, 300);
    return () => {
      setIsOpenClass('close');
    };
  }, [isOpen]);

  return (
    <>
      {/* Renderiza o elemento de gatilho */}
      <span onClick={openModal}>{trigger}</span>

      {/* Modal propriamente dita */}
      {isOpen && (
        <div className={`modal ${isOpenClass}`}>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
