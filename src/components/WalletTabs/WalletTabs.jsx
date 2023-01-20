import { useState } from 'react';
import { Container, Box, TabLink, TransactWrapper } from './styled';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import InputTransactionForm from 'components/InputTransactionForm/InputTransactionForm';
import Summary from 'components/Summary/Summary';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab('tab2');
  };
  return (
    <Container>
      <Box>
        <TabLink
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={handleTab1}
        >
          Expenses
        </TabLink>
        <TabLink
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={handleTab2}
        >
          income
        </TabLink>
      </Box>

      <div className="outlet">
        {activeTab === 'tab1' ? (
          <>
            <InputTransactionForm type="expense" />
            <TransactWrapper>
              <TransactionsList type="expense" />
              <Summary />
            </TransactWrapper>
          </>
        ) : (
          <>
            <InputTransactionForm type="income" />
            <TransactWrapper>
              <TransactionsList type="income" />
              <Summary />
            </TransactWrapper>
          </>
        )}
      </div>
    </Container>
  );
};
