export const getItem = key => {
  try {
    const value = localStorage.getItem(key);
    return !value ? undefined : JSON.parse(value);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
export const setItem = (key, data) => {
  try {
    const value = JSON.stringify(data);
    localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const removeItem = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
