export const sortTransactions = array => {
  const sortedArray = [...array].sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
  return sortedArray;
};
