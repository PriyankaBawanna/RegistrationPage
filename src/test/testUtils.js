export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

//find by css class
export const findByClassAttribute = (wrapper, val) => {
  return wrapper.find(`.${val}`);
};
