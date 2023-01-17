import styled from 'styled-components';

export const Triangle = styled.div`
  position: absolute;
  top: -11px;
  left: 46.36px;

  height: 12px;
  width: 26px;

  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);

  clip-path: polygon(100% 100%, 0 100%, 50% 0);
`;

export const StyledWindow = styled.div`
  box-sizing: border-box;

  position: relative;

  height: 152px;
  width: 288px;

  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);

  padding: 29px 29.59px;
  border-radius: 30px;
  margin-top: 13px;

  opacity: 0;

  transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: block;

    width: 280px;
  }
`;

export const NotificationText = styled.p`
  font-size: 14px;
  line-height: 1.43;

  color: white;

  margin: 0;

  margin-bottom: 20px;
`;

export const NotificationSubText = styled.p`
  font-size: 12px;
  line-height: 1.33;

  color: white;

  margin: 0;
`;
