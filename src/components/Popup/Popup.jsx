import { createPortal } from 'react-dom';
import { BackDrop, Close, Modal, Title, WrapBtn } from './Popup.styled';
import { Btn } from 'components/Buttons/Btn';

export const Popup = ({ popup, setPopup }) => {
  const handleLogout = () => {
    popup.action();
    closePopup();
  };

  const closePopup = () => {
    setPopup(prevState => ({ ...prevState, isShow: false }));
  };

  const onClickBackDrop = event => {
    if (event.target === event.currentTarget) closePopup();
    // closePopup();
  };

  return createPortal(
    <BackDrop onClick={onClickBackDrop} id="backdrop">
      <Modal>
        <Close onClick={closePopup}>x</Close>
        <Title>{popup.title}</Title>
        <WrapBtn>
          <Btn type="button" text="Yes" onClick={handleLogout} />
          <Btn type="button" text="No" onClick={closePopup} />
        </WrapBtn>
      </Modal>
    </BackDrop>,
    document.querySelector('#modal')
  );
};
