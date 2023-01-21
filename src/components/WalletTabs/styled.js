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

export const Outlet = styled.div`
  margin-top: 0px;
`;

export const TransactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SummaryWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
