const { DNA } = require('../model/dna');

function saveAdnProviders(adn, mutan) {
    return DNA.update({
        adn,
        mutan:  mutan ? 1 : 0
    });
}


function getReportProviders(adn, mutan) {
    return DNA.scan();
}

module.exports = {
    saveAdnProviders,
    getReportProviders
};
