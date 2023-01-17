import { useSelector } from 'react-redux';
import {
  getLoadingStatus,
  getLogStatus,
  getUser,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLogStatus);
  const isRefreshing = useSelector(getLoadingStatus);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
