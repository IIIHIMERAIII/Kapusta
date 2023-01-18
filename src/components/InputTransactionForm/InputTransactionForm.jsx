import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './InputTransactionForm.css';
import AsyncSelect from 'react-select/async';
import sprite from 'images/icons_sprite.svg';
import { Btn } from 'components/Buttons/Btn';
import {
  getTransactionCategories,
  API_TRANSACTION,
} from './api/apiTransactions';

export default function InputTransactionForm({ type = 'expence' }) {
  const TRANSACTION_FORM_DATA = {
    expence: {
      description: 'Product description',
      selectCategoryPlaceholder: 'Product category',
    },
    income: {
      description: 'Income description',
      selectCategoryPlaceholder: 'Income category',
    },
  };

  const multiSelectStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#52555F' : '#C7CCDC',
      backgroundColor: state.isSelected ? '#a0a0a0' : '#ffffff',
      fontSize: '12px',
    }),
    control: defaultStyles => ({
      ...defaultStyles,

      width: '168px',
      height: '40px',
      fontSize: '12px',
      boxShadow: 'none',

      color: '#C7CCDC',
      border: 'none',
      borderLeft: '#F5F6FB 1px solid',
      borderRight: '#F5F6FB 1px solid',
    }),
    singleValue: defaultStyles => ({
      ...defaultStyles,
      fontSize: '12px',
      color: '#C7CCDC',
    }),
    placeholder: defaultStyles => ({
      ...defaultStyles,
      //  color: '#C7CCDC',
      fontSize: '12px',
    }),
  };

  const today = new Date();
  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState(null);

  const onClearForm = () => {
    setDate(today);
    setFormData(initialFormData);
    setCategory(null);
  };

  const onFormSubmit = () => {
    console.log("I'm form submitter ");

    if (formData.product !== '' && parseFloat(formData.sum) > 0 && category) {
      const transaction = {
        description: formData.product,
        amount: parseFloat(formData.sum),
        date: date,
        category: Object.values(
          API_TRANSACTION[type].apiCategories[category.value]
        ),
      };
      console.log(transaction);
    }
    //else: form is not complete
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

  const token = useSelector(state => state.auth.token);

  const promiseOptions = () =>
    new Promise(resolve => getTransactionCategories(type, token, resolve));

  return (
    <div className="input-product-form__wrapper">
      <form
        className="input-product-form"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <svg
          className="input-product-form--calendar-svg"
          width="20"
          height="20"
        >
          <use href={sprite + `#calendar`}></use>
        </svg>
        <ReactDatePicker
          className="date-picker__input"
          selected={date}
          onChange={date => setDate(date)}
          maxDate={date}
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
          <AsyncSelect
            defaultOptions
            placeholder={TRANSACTION_FORM_DATA[type].selectCategoryPlaceholder}
            styles={multiSelectStyles}
            loadOptions={promiseOptions}
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
            required
          />
          <svg className="input-product-form--calc-svg" width="20" height="20">
            <use href={sprite + `#calculator`}></use>
          </svg>
        </div>
        <Btn text="INPUT" onClick={onFormSubmit} />
        <Btn text="CLEAR" onClick={onClearForm} />
      </form>
    </div>
  );
}
