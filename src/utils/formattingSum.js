export const formattingSum = data => {
  const fixedData = data.toFixed(2);
  if (data < 10) return '0' + fixedData;

  const dividedData = fixedData.split('.');

  const spacedData = Number(dividedData[0])
    .toLocaleString()
    .split(',')
    .join(' ');
  return spacedData + '.' + dividedData[1];
};
