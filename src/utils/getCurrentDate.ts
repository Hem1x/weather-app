export const getCurrentDate = () => {
  const months: Record<number, string> = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const date = new Date();
  const dateString = `${months[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`;

  return dateString;
};
