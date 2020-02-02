const addMonths = (date, months) => {
  date.setMonth(date.getMonth() + (months - 1));

  return date;
};

export default addMonths;
