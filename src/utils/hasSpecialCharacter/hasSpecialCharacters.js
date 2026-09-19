export function hasSpecialCharacters(str) {
  // The [^...] matches any character NOT inside the brackets
  // a-zA-Z0-9 matches letters and numbers
  // \s matches spaces

  //takes a string
  const regex = /[^a-zA-Z0-9\s]/;
  return regex.test(str);
}