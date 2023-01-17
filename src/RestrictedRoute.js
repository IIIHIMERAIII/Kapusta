import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLogStatus } from 'redux/auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getLogStatus);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
