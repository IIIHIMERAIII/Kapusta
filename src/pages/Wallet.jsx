import { Balance } from 'components/Balance/Balance';
import { Tabs } from 'components/WalletTabs/WalletTabs';
const WalletPage = () => {
  return (
    <>
      <main>
        <Balance />
        <Tabs />
      </main>
    </>
  );
};

export default WalletPage;
