const {
    isMutant
} = require('./providers/adn');


const adn1 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
const adn2 = ["JJJJJJ","JJJJJJ","JJJJJJ","JJJJJJ","JJJJJJ","JJJJJJ"];
const adn3 = ["ATTGGT","ATTGGC","ATTGTC","ATTGTC","ATTGCC","TTTLCC"];

console.log(isMutant(adn1));
console.log(isMutant(adn2));
console.log(isMutant(adn3));