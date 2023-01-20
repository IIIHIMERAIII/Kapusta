import styled from 'styled-components';

export const SummaryList = styled.ul`
  padding: 0;
  margin: 0;
  border-radius: 30px;
  overflow: hidden;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 213px;
`;

export const SummaryTitle = styled.li`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 14px;
  letter-spacing: 0.02em;
  margin-bottom: 2px;
  background-color: ${p => p.theme.colors.PrimaryGray};
`;

export const SummaryItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  height: 38px;
  background-color: ${p => p.theme.colors.PrimaryGray};
  &:last-child {
    border-bottom-right-radius: 30px;
  }
`;

export const SummaryText = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
