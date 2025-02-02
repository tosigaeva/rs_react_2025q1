export const getSearchValue = (): string => {
  return localStorage.getItem('SearchValue') || '';
};

export const setSearchValue = (value: string): void => {
  localStorage.setItem('SearchValue', value);
};
