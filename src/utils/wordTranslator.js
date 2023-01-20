export const wordTranslator = word => {
  switch (word) {
    case 'Январь':
      return 'January';
    case 'Февраль':
      return 'February';
    case 'Март':
      return 'March';
    case 'Апрель':
      return 'April';
    case 'Май':
      return 'May';
    case 'Июнь':
      return 'June';
    case 'Июль':
      return 'July';
    case 'Август':
      return 'August';
    case 'Сентябрь':
      return 'September';
    case 'Октябрь':
      return 'October';
    case 'Ноябрь':
      return 'November';
    case 'Декабрь':
      return 'December';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Add. Income';
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technique';
    case 'Коммуналка и связь':
      return 'Communal, communication';
    case 'Спорт и хобби':
      return 'Sports, hobbies';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    default:
      return `Please add ${word} to function`;
  }
};
