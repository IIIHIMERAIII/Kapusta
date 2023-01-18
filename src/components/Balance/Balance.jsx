import {
  BalanceContainer,
  Text,
  CurrentBalance,
  StyledBtn,
  CurrentBalanceContainer,
} from './Balance.styled';
import { Notification } from 'components/Notification/Notification';

export function Balance() {
  return (
    <>
      <BalanceContainer>
        <Text>Balance:</Text>
        <CurrentBalanceContainer>
          <CurrentBalance>00.00 uah</CurrentBalance>
          <Notification />
        </CurrentBalanceContainer>

        <StyledBtn type="button">Confirm</StyledBtn>
      </BalanceContainer>
    </>
  );
}
