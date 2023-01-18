import { NavLink } from 'react-router-dom';

const WalletPage = () => {
  return <h1>Wallet
              <NavLink to='/stats'>Statistics</NavLink>
  </h1>;
};

export default WalletPage;
