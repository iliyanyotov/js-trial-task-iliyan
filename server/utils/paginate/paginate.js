const PAGINATE_DEFAULT_PARAMS = {
  PAGE: 1,
  PAGE_SIZE: 10,
};

const paginate = (records, params = {}) => {
  const {
    page = PAGINATE_DEFAULT_PARAMS.PAGE,
    pageSize = PAGINATE_DEFAULT_PARAMS.PAGE_SIZE,
  } = params;

  return records.slice(pageSize * (page - 1), pageSize * page);
};

export default paginate;
