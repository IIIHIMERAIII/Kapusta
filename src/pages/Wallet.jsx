import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import { NavLink } from 'react-router-dom';

const WalletPage = () => {
  return (
    <>
      <h1>Wallet</h1>
      <NavLink to='/statistics'>Statistics</NavLink>
      <InputTransactionForm type="expence" />
    </>
  );
};

export default WalletPage;
