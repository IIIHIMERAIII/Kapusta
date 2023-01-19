export const getParseDate = operationDate => {
  const instance = new Date(Date.parse(operationDate));
  const day = instance.getDate();
  const getCurrMonth = () => {
    const month = instance.getMonth() + 1;
    if (month < 9) {
      return `0${month}`;
    }
    return month;
  };
  const month = getCurrMonth();
  const year = instance.getFullYear();
  return `${day}.${month}.${year}`;
};
