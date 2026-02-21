//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (adn) => {
const transition={
    G:'C',
    C:'G',
    T:'A',
    A:'U'
    }
    return adn
    .split("")
    .map(nucleotide => transition[nucleotide])
    .join("")
};
