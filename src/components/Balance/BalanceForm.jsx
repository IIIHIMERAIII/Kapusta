import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from 'redux/transactions/transactionsSelectors';
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
import { Popup } from 'components/Popup/Popup';
import { fetchUserBalance } from 'redux/transactions/transactionsOps';

export const formating = data => {
  const fixedData = data.toFixed(2);
  if (data < 10) return '0' + fixedData;

  const dividedData = fixedData.split('.');
  
  const spacedData = Number(dividedData[0])
    .toLocaleString()
    .split(',')
    .join(' ');
  return spacedData + '.' + dividedData[1];
};

export function BalanceFrom() {
  const balance = useSelector(selectBalance);
  const token = useSelector(state => state.auth.accessToken);

  const [popup, setPopup] = useState({
    isShow: false,
    title: '',
    action: null,
  });

  const dispatch = useDispatch();

  const [value, setValue] = useState(balance ?? 0);

  const onBlur = evt => {
    const data = evt.target.value.split(' ').join('');
    const number = Number(data);

    if (number <= 1000000) {
      setValue(number);
      evt.target.value = formating(number);
    } else {
      evt.target.value = formating(value);
    }
  };

  const onClick = () => {
    setPopup({
      isShow: true,
      title: 'Are you sure?',
      action: () => dispatch(fetchUserBalance({ value, token })),
    });
    document.querySelector('#modal').classList.add('js-action');
  };

  return (
    <>
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
                onBlur={onBlur}
                pattern="[0-9]"
              />
              uah
            </CurrentBalance>
            <Notification money={value} />
          </CurrentBalanceContainer>
          <StyledBtn type="button" onClick={onClick}>
            Confirm
          </StyledBtn>
        </BaseContainer>
        </BalanceForm>
        {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
