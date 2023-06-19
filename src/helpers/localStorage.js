export const getItem = key => {
  try {
    const value = localStorage.getItem(key);
    return !value ? undefined : JSON.parse(value);
  } catch (error) {
    throw new Error(error);
  }
};
export const setItem = (key, data) => {
  try {
    const value = JSON.stringify(data);
    localStorage.setItem(key, value);
  } catch (error) {
    throw new Error(error);
  }
};
