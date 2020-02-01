const getRandomFloat = (min, max, fp = 2) => {
  return (Math.random() * (max - min) + min).toFixed(fp);
};

export default getRandomFloat;
