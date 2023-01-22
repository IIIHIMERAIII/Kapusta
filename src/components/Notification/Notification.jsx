import { useEffect } from 'react';
import { useState } from 'react';
import {
  NotificationContainer,
  StyledWindow,
  Triangle,
  NotificationText,
  NotificationSubText,
} from './Notification.styled';

export function Notification({ money = false, }) {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (!money) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => setOpacity(1), 0);
        setTimeout(() => setOpacity(0), 9400);
        setTimeout(() => setShow(false), 10000);
      }, 1000);
    }
  }, [money]);

  return (
    <>
      {show && (
        <NotificationContainer onClick={() => setShow(false)}>
          <StyledWindow style={{ opacity }}>
            <Triangle />
            <NotificationText>
              Hello! To get started, enter the current balance of your account!
            </NotificationText>
            <NotificationSubText>You can't spend money until you have it :)</NotificationSubText>
          </StyledWindow>
        </NotificationContainer>
      )}
    </>
  );
}
