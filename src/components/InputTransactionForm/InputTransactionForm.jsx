import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import 'react-datepicker/dist/react-datepicker.css';
import './InputTransactionForm.css';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import sprite from 'images/icons_sprite.svg';
import { Btn } from 'components/Buttons/Btn';
import {
  getTransactionCategories,
  API_TRANSACTION,
} from '../../api/apiTransactionCategories';
import { addTransactionOp } from 'redux/transactions/transactionsOps';
import { DatePickerComponent } from 'components/DatePickerComponent/DatePickerComponent';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

const selectStyles = {
  control: () => ({
    zIndex: '1000',
    boxSizing: 'border-box',
    width: '168px',
    height: '40px',
    backgroundColor: '#ffffff',
    color: '#C7CCDC',
    fontSize: '12px',
    boxShadow: 'none',
    fontWeight: '400',
    fontFamily: "Roboto,'Open Sans','Helvetica Neue', sans-serif",
    lineHeight: '1.15',
    letterSpacing: '0.02em',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '2px solid #F5F6FB',
    borderRight: '2px solid #F5F6FB',
    borderTop: 'none',
    borderBottom: 'none',
    paddingLeft: '20px',
  }),
  menu: () => ({
    boxSizing: 'border-box',
    position: 'absolute',
    // width: '182px',
    width: '168px',
    backgroundColor: '#ffffff',
    zIndex: '200',
    border: '2px solid #F5F6FB',
    boxShadow: '0px 3px 4px rgba(170, 178, 197, 0.4)',
  }),
  valueContainer: styles => ({
    ...styles,
    padding: '0',
  }),
  singleValue: styles => ({
    ...styles,
    color: '#C7CCDC',
  }),
  indicatorSeparator: () => ({
    // ...styles,
    display: 'none',
  }),
  dropdownIndicator: (styles, { isFocused, isSelected }) => ({
    ...styles,
    color: isFocused ? '#52555F' : '#C7CCDC',
    transform: isFocused ? 'rotate(180deg)' : null,
  }),
  option: (_, { isDisabled, isFocused }) => {
    return {
      height: '32px',
      paddingLeft: '20px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      boxShadow: 'none',
      fontWeight: '400',
      fontFamily: "Roboto,'Open Sans','Helvetica Neue', sans-serif",
      lineHeight: '1.15',
      letterSpacing: '0.02em',
      color: isFocused ? '#52555F' : '#C7CCDC',
      cursor: isDisabled ? 'not-allowed' : 'default',
      backgroundColor: isFocused ? '#F5F6FB' : '#ffffff',
    };
  },
};

export default function InputTransactionForm({ type }) {
  const TRANSACTION_FORM_DATA = {
    expense: {
      description: 'Product description',
      selectCategoryPlaceholder: 'Product category',
    },
    income: {
      description: 'Income description',
      selectCategoryPlaceholder: 'Income category',
    },
  };

  const selectOptionsSheme = {
    income: [],
    expense: [],
  };

  const selectOptions = useRef(selectOptionsSheme);

  const today = new Date();
  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState(null);
  const [isOptionsLoading, setIsOptionsLoading] = useState(false);

  const [ssum, setssum] = useState(0);

  useEffect(() => {
    const getSelectOptions = async () => {
      try {
        setIsOptionsLoading(true);
        const data = await getTransactionCategories(type);

        selectOptions.current[type] = data.map((option, i) => {
          return {
            value: i,
            label: API_TRANSACTION[type].apiCategories[option] ?? 'Other',
          };
        });
      } catch (error) {
        Notiflix.Notify.error(`Server error: ${error.message}`, notifySettings);
        console.error(error);
      } finally {
        setIsOptionsLoading(false);
        console.log('UseEffect running');
      }
    };

    if (selectOptions.current[type].length > 0) return;
    getSelectOptions();
  }, [type]);

  const dispatch = useDispatch();

  const onClearForm = () => {
    setDate(today);
    setFormData(initialFormData);
    setCategory(null);
  };

  const isFormValid = (product, category, sum) => {
    let isValid = true;
    if (!product) {
      Notiflix.Notify.warning(
        'You should enter transaction description',
        notifySettings
      );
      isValid = false;
    }
    if (!category) {
      Notiflix.Notify.warning(
        'You should choose transaction category',
        notifySettings
      );
      isValid = false;
    }
    if (sum === '' || parseFloat(sum) < 0.01) {
      Notiflix.Notify.warning(
        'You should enter transaction amount',
        notifySettings
      );
      isValid = false;
    }
    return isValid;
  };

  const onFormSubmit = () => {
    if (!isFormValid(formData.product, category, formData.sum)) return null;
    const transaction = {
      description: formData.product,
      amount: parseFloat(formData.sum),
      date: date.toISOString().split('T')[0],
      category: Object.keys(API_TRANSACTION[type].apiCategories)[
        category.value
      ],
    };
    dispatch(addTransactionOp({ type, transaction }));
    onClearForm();
  };

  const validateSumInput = value => {
    if (value === '') {
      setFormData(oldData => {
        return { ...oldData, sum: '' };
      });
      return null;
    }

    let num = parseFloat(value);

    if (isNaN(num)) num = formData.sum;

    setFormData(oldData => {
      return { ...oldData, sum: num };
    });
  };

  console.log('RENDER FORM. Type is', type);
  return (
    <div className="input-product-form__wrapper">
      <form className="input-product-form">
        <DatePickerComponent
          name="date"
          date={date}
          maxDate={today}
          handler={date => setDate(date)}
        />

        <div className="input-product-form__inputs-wrapper">
          <input
            type="text"
            value={formData.product}
            className="input-product-form__input product-description"
            name="product"
            placeholder={TRANSACTION_FORM_DATA[type].description}
            onChange={e =>
              setFormData(oldData => {
                return { ...oldData, product: e.target.value };
              })
            }
          />
          <Select
            key={type}
            defaultOptions
            placeholder={TRANSACTION_FORM_DATA[type].selectCategoryPlaceholder}
            styles={selectStyles}
            options={selectOptions.current[type]}
            isLoading={isOptionsLoading}
            closeMenuOnSelect={true}
            onChange={selectedOption => setCategory(selectedOption)}
            value={category}
          />

          <input
            type="text"
            value={formData.sum}
            className="input-product-form__input product-amount"
            name="product"
            placeholder="0.00"
            onChange={e => validateSumInput(e.target.value)}
          />
          <svg className="input-product-form--calc-svg" width="20" height="20">
            <use href={sprite + `#calculator`}></use>
          </svg>
        </div>
        <div className="input-product-form--buttn-group__wrapper">
          <Btn text="INPUT" onClick={onFormSubmit} />
          <Btn text="CLEAR" onClick={onClearForm} />
        </div>
      </form>
    </div>
  );
}
