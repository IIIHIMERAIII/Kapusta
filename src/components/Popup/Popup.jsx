import { createPortal } from 'react-dom';
import { BtnElement } from 'components/Buttons/Btn.styled';
import { BackDrop, Close, Modal, Title, WrapBtn } from './Popup.styled';

export const Popup = ({ popup, setPopup }) => {
  const handleOnClick = () => {
    popup.action();
  };

  const closePopup = () => {
    setPopup(prevState => ({ ...prevState, isShow: false }));
  };

  const onClickBackDrop = event => {
    if (!event.target.id === 'backdrop') return;
    closePopup();
  };

  return createPortal(
    // <BackDrop onClick={onClickBackDrop} id="backdrop">
    <Modal>
      <Close onClick={closePopup}>x</Close>
      <Title>{popup.title}</Title>
      <WrapBtn>
        <BtnElement type="button" text="Yes" onClick={handleOnClick} />
        <BtnElement type="button" text="No" onClick={closePopup} />
      </WrapBtn>
    </Modal>,
    // </BackDrop>
    document.querySelector('#modal')
  );
};
