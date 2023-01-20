import styled from 'styled-components';
import { Link } from 'components/NavLink/NavLink.styled';

export const Container = styled.div`
  margin-top: 8px;
`;

export const Box = styled.div`
  display: flex;
`;

export const TabLink = styled(Link)`
  width: 138px;
  height: 40px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const TransactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 60px;
`;
