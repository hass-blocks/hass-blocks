export const toCamel = (s: string) => {
  return s.replace(/([_][a-z])/gi, (match) => {
    return match.toUpperCase().replace('-', '').replace('_', '');
  });
};
