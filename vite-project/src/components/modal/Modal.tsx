import { FC, ReactNode } from 'react';
import './modal.scss';

type Props = {
  isActiveModal: boolean;
  setActiveModal: (val: boolean) => void;
  children: ReactNode;
};

const Modal: FC<Props> = ({ isActiveModal, setActiveModal, children }) => {
  return (
    <div className={isActiveModal ? 'modal active' : 'modal'} onClick={() => setActiveModal(false)}>
      <div
        className={isActiveModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setActiveModal(false)}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
