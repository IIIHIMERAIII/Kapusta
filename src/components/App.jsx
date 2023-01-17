import { useEffect, lazy } from 'react';
import { RestrictedRoute } from '../RestrictedRoute'
import { PrivateRoute } from '../PrivateRoute'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';


const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const WalletPage = lazy(() => import('../pages/Wallet'));
const StatsPage = lazy(() => import('../pages/Stats'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/wallet" component={<RegisterPage />} />
          }
          />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/wallet" component={<LoginPage />} />
          }
        />  
        <Route
          path="/wallet"
          element={
            <PrivateRoute redirectTo="/login" component={<WalletPage />} />
          }   
        />
        <Route
          path="/stats"
          element={
            <PrivateRoute redirectTo="/login" component={<StatsPage />} />
          }   
        />
      </Route>
    </Routes>
  );
};