import PropTypes from 'prop-types';
import { BtnElement, BtnText } from './Btn.styled';

export const Btn = ({
  text,
  status,
  disabled = false,
  icon: Icon = null,
  type = 'button',
  onClick = null,
}) => {
  return (
    <BtnElement
      status={status}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon></Icon>}
      <BtnText>{text}</BtnText>
    </BtnElement>
  );
};

Btn.propTypes = {
  icon: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  status: PropTypes.string,
  onClick: PropTypes.func,
};
