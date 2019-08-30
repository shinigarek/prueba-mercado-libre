const { Reports } = require('../model/report');


function getReportProviders() {
    return Reports.get('reportADN');
}

function setReportProviders(report) {
    return Reports.update({
        identity: report.identity
    },

    {
        $PUT: {
            count_mutant_dna: report.count_mutant_dna,
            count_human_dna: report.count_human_dna,
            ratio: report.ratio
        }
    });
}

module.exports = {
    getReportProviders,
    setReportProviders
};
