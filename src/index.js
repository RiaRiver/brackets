module.exports = function check(str, bracketsConfig) {
  const bracketPairs = Object.fromEntries(bracketsConfig);

  const isOpenCloseSame = (bracket) => bracket === bracketPairs[bracket];
  // eslint-disable-next-line no-prototype-builtins
  const isOpenBracket = (bracket) => bracketPairs.hasOwnProperty(bracket);
  const stack = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const bracket of str) {
    if (isOpenCloseSame(bracket)) {
      const stacked = stack.at(-1);
      if (stacked !== bracket) {
        stack.push(bracket);
      } else stack.pop();
    } else if (isOpenBracket(bracket)) {
      stack.push(bracket);
    } else {
      const stacked = stack.pop();
      if (bracketPairs[stacked] !== bracket) return false;
    }
  }

  return !stack.length;
};
