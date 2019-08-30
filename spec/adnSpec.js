const expect = require('chai').expect;
const {
    isMutant
} = require('../providers/adn');

describe("DNA test", function () {
    it("should return a valid DNA", function () {
        const adn = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
        expect(isMutant(adn)).equal(true);
    });

    it("should return a valid DNA", function () {
        const adn = ["CTATCTA", "ATCTATC", "ATCTACA", "ATCCATC", "GTAGATA", "GTAFATA"];
        expect(isMutant(adn)).equal(true);
    });

    it("should return a invalid DNA", function () {
        const adn = ["JJJJJJ", "JJJJJJ", "JJJJJJ", "JJJJJJ", "JJJJJJ", "JJJJJJ"];
        expect(isMutant(adn)).equal(false);
    });

    it("should return a invalid DNA", function () {
        const adn = ["ATGCGG", "CAGTFC", "TTATGT", "AGAAGG", "CCFGTF", "TCACTG"
        ];
        expect(isMutant(adn)).equal(false);
    });
});