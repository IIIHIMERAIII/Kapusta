import { Balance } from 'components/Balance/Balance';
import { Tabs } from 'components/WalletTabs/WalletTabs';
const WalletPage = () => {
  return (
    <>
      <h1>Wallet</h1>
      <Balance />
      <Tabs />
    </>
  );
};

export default WalletPage;
