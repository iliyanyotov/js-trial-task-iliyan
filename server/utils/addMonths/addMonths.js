const addMonths = (date, months) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + (months - 1));
  return newDate;
};

export default addMonths;
