import { useState } from 'react';
import {
  Text,
  CurrentBalance,
  StyledBtn,
  CurrentBalanceContainer,
  BalanceForm,
  Input,
  BaseContainer,
} from './Balance.styled';
import { Notification } from 'components/Notification/Notification';

export function BalanceFrom() {
  const [value, setValue] = useState(0);

  const formating = data => {
    const fixedData = data.toFixed(2);
    if (data < 10) return '0' + fixedData;

    const dividedData = fixedData.split('.');

    const spacedData = Number(dividedData[0]).toLocaleString().split(',').join(' ');

    return spacedData + '.' + dividedData[1];
  };

  const onChange = evt => {
    const data = evt.target.value.split(' ').join('');
    const number = Number(data);

    if (number <= 1000000) {
      setValue(number);
      evt.target.value = formating(number);
    } else {
      evt.target.value = formating(value);
    }
  };

  return (
    <BalanceForm>
      <Text htmlFor="balance">Balance:</Text>
      <BaseContainer>
        <CurrentBalanceContainer>
          <CurrentBalance>
            <Input
              type="text"
              id="balance"
              name="balance"
              defaultValue={formating(value)}
              onBlur={onChange}
              pattern="[0-9]"
            />
            uah
          </CurrentBalance>
          <Notification money={value} />
        </CurrentBalanceContainer>
        <StyledBtn type="button">Confirm</StyledBtn>
      </BaseContainer>
    </BalanceForm>
  );
}
