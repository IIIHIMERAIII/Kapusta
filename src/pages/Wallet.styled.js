import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  margin-top: 40px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
