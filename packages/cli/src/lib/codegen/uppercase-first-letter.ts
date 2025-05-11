export const uppercaseFirstLetter = (theString: string) => {
  return `${theString.slice(0, 1).toLocaleUpperCase()}${theString.slice(1)}`;
};
