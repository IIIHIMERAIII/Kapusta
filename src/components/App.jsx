import { useEffect, lazy } from 'react';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { Layout } from './Layout';
import { fetchCurrentUser, googleAuthUser } from 'redux/auth/authOperations';
import { getToken } from 'redux/auth/authSelectors';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Logins'));
const WalletPage = lazy(() => import('../pages/Wallet'));
const StatsPage = lazy(() => import('../pages/Stats'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const sid = searchParams.get('sid');
    if (!accessToken) return;
    dispatch(googleAuthUser({ accessToken, refreshToken, sid }));
    navigate('/wallet');
  }, [searchParams, dispatch, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/wallet" component={<LoginPage />} />
          }
        />
        <Route
          path="wallet"
          element={
            <PrivateRoute redirectTo="/login" component={<WalletPage />} />
          }
        />
        <Route
          path="statistics"
          element={
            <PrivateRoute redirectTo="/login" component={<StatsPage />} />
          }
        />
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Route>
    </Routes>
  );
};
