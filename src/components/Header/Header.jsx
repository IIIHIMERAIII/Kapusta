import {
  StyledHeader,
  LogoContainer,
  Block,
  LogoSvg,
  StyledContainer,
  Img,
  Name,
  Line,
  Exit,
  ExitText,
  ExitSvg,
} from './Header.styled';
import svg from '../../images/icons_sprite.svg';

export function Header() {
  const token = null;

  return (
    <StyledHeader>
      <LogoContainer>
        <Block />
        <LogoSvg>
          <use href={`${svg}#logo`}></use>
        </LogoSvg>
      </LogoContainer>
      {token && (
        <StyledContainer>
          <Img />
          <Name>qwer</Name>
          <Line />
          <Exit type="button">
            <ExitText>Exit</ExitText>
            <ExitSvg>
              <use href={`${svg}#logout`}></use>
            </ExitSvg>
          </Exit>
        </StyledContainer>
      )}
    </StyledHeader>
  );
}
