import { Balance } from 'components/Balance/Balance';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import { Tabs } from 'components/WalletTabs/WalletTabs';
const WalletPage = () => {
  return (
    <>
      <h1>Wallet</h1>
      <Balance />
      <InputTransactionForm type="expense" />
      <Tabs/>
    </>
  );
};

export default WalletPage;