import { BalanceContainer, AbsoluteContainer, StyledLink, ReportsSvg } from './Balance.styled';
import svg from '../../images/icons_sprite.svg';
import { BalanceFrom } from './BalanceForm';
import { createPortal } from 'react-dom';

export function Balance() {
  return (
    <>
      <BalanceContainer />
      {createPortal(
        <AbsoluteContainer>
          <BalanceFrom />
          <StyledLink to="/statistics">
            Reports
            <ReportsSvg>
              <use href={`${svg}#reports`}></use>
            </ReportsSvg>
          </StyledLink>
        </AbsoluteContainer>,

        document.querySelector('#balance')
      )}
    </>
  );
}
