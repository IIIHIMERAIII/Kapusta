import { Balance } from 'components/Balance/Balance';
import { Tabs } from 'components/WalletTabs/WalletTabs';
const WalletPage = () => {
  return (
    <>
      <main>
        <h1>Wallet</h1>
        <Balance />
        <Tabs />
      </main>
    </>
  );
};

export default WalletPage;
