import { Balance } from 'components/Balance/Balance';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import { NavLink } from 'react-router-dom';

const WalletPage = () => {
  return (
    <>
      <h1>Wallet</h1>
      <Balance />;
      <NavLink to='/statistics'>Statistics</NavLink>
      <InputTransactionForm type="expence" />
    </>
  );
};

export default WalletPage;
