import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import TransactionsList from 'components/TransactionsList/TransactionsList';

const WalletPage = () => {
  return (
    <>
      <h1>Wallet</h1>
      <InputTransactionForm type="expense" />
      <TransactionsList type="expense" />
    </>
  );
};

export default WalletPage;
