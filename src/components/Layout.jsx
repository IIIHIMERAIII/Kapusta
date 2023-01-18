import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Loader } from '../components/Loader/Loader';
import { getLogStatus } from 'redux/auth/authSelectors';

export const Layout = () => {
  // const isLoggedIn = useSelector(getLogStatus);
  return (
    <>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
