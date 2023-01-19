import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css';
import sprite from 'images/icons_sprite.svg';

export function DatePickerComponent({ date, handler }) {
  return (
    <label className="label">
      <svg className="iconCalendar" width="20" height="20">
        <use href={sprite + `#calendar`} />
      </svg>
      <ReactDatePicker
        className="date"
        name="date"
        dateFormat="dd.MM.yyyy"
        selected={date}
        maxDate={date}
        onChange={handler}
      />
    </label>
  );
}
