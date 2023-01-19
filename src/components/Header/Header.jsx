import {
  StyledHeader,
  LogoContainer,
  Block,
  LogoSvg,
  StyledContainer,
  Img,
  Avatar,
  Name,
  Line,
  Exit,
  ExitText,
  ExitSvg,
} from './Header.styled';
import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getToken } from 'redux/auth/authSelectors';
import { logoutUser } from 'redux/auth/authOperations';
import svg from '../../images/icons_sprite.svg';
import { Popup } from 'components/Popup/Popup';

export function Header() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const token = useSelector(getToken);
  const [popup, setPopup] = useState({
    isShow: false,
    title: '',
    action: null,
  });

  const handleExit = () => {
    setPopup({
      isShow: true,
      title: 'Do you really want to leave?',
      action: () => dispatch(logoutUser()),
    });
  };

  return (
    <>
      <StyledHeader>
        <LogoContainer>
          <Block />
          <LogoSvg>
            <use href={`${svg}#logo`}></use>
          </LogoSvg>
        </LogoContainer>
        {token && (
          <StyledContainer>
            <Img>
              <Avatar>
                  {/* {user.email.slice(0, 1).toUpperCase()} */}
              </Avatar>
            </Img>
            <Name>{user.email}</Name>
            <Line />
            <Exit type="button" onClick={handleExit}>
              <ExitText>Exit</ExitText>
              <ExitSvg>
                <use href={`${svg}#logout`}></use>
              </ExitSvg>
            </Exit>
          </StyledContainer>
        )}
      </StyledHeader>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
