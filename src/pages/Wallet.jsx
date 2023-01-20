import { Balance } from 'components/Balance/Balance';
import { Tabs } from 'components/WalletTabs/WalletTabs';
import { Main } from 'components/Container/container';
const WalletPage = () => {
  return (
    <>
      <Main>
        <Balance />
        <Tabs />
      </Main>
    </>
  );
};

export default WalletPage;
