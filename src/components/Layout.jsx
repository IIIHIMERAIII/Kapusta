import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

import { Loader } from '../components/Loader/Loader';
import { getLogStatus } from 'redux/auth/authSelectors';

export const Layout = () => {
  // const isLoggedIn = useSelector(getLogStatus);
  return (
    <>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          voluptas.
        </p>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
