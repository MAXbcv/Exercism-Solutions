//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isPangram = (phrase) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let liste = phrase.toLowerCase();

  return [...alphabet].every((element) => liste.includes(element));
};

export { isPangram };
