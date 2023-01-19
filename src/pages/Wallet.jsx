import { Balance } from 'components/Balance/Balance';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';

const WalletPage = () => {
  return (
    <>
      <h1>Wallet</h1>
      <Balance />;
      <InputTransactionForm type="expense" />
    </>
  );
};

export default WalletPage;