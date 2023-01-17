import { useEffect, lazy } from 'react';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';
import { fetchCurrentUser } from 'redux/auth/authOperations';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Logins'));
const WalletPage = lazy(() => import('../pages/Wallet'));
// const StatsPage = lazy(() => import('../pages/Stats'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/wallet"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="wallet"
          element={
            <PrivateRoute redirectTo="/login" component={<WalletPage />} />
          }
        />
        {/* <Route
          path="stats"
          element={
            <PrivateRoute redirectTo="/login" component={<StatsPage />} />
          }   
        /> */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Route>
    </Routes>
  );
};
