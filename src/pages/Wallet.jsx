import { Balance } from 'components/Balance/Balance';
import { Tabs } from 'components/WalletTabs/WalletTabs';
import { Main } from 'components/Container/container';
import Summary from 'components/Summary/Summary';
import { SummaryWrapper } from './Wallet.styled';
const WalletPage = () => {
  return (
    <>
      <Main>
        <Balance />
        <Tabs />
        <SummaryWrapper>
          <Summary />
        </SummaryWrapper>
      </Main>
    </>
  );
};

export default WalletPage;
