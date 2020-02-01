//https://stackoverflow.com/a/31379050
const getRandomDate = (startDate, endDate, startHour = 0, endHour = 24) => {
  const date = new Date(+startDate + Math.random() * (endDate - startDate));
  const hour = (startHour + Math.random() * (endHour - startHour)) | 0;

  date.setHours(hour);
  return date;
};

export default getRandomDate;
