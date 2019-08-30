'use strict';
const {
    isMutant
} = require('../providers/adn');
const {
    saveAdnProviders,
} = require('../providers/adn.providers');

const {
    getReportProviders,
    setReportProviders,
} = require('../providers/report.providers');

module.exports.mutant = (event, context, callback) => {
    const matriz = event.body.dna
    const mutant = isMutant(matriz);

    saveAdnProviders(matriz.join(''), mutant).then(() => {
            if (mutant === true) {
                context.succeed({
                    statusCode: 200,
                    body: 'ok'
                });
            } else {
                context.succeed({
                    statusCode: 503,
                    body: 'Forbidden'
                });
            }
        })
        .catch((err) => {
            console.log(err);
            callback(null, {
                statusCode: 500,
                body: 'Ha ocurrido un error'
            });
        });
}

module.exports.stats = (event, context, callback) => {
    getReportProviders()
        .then((data) => {
            callback(null, {
                count_human_dna: data.count_human_dna,
                ratio: data.ratio,
                count_mutant_dna: data.count_mutant_dna
            });
        })
        .catch((err) => {
            callback(null, {
                statusCode: 500,
                body: 'Ha ocurrido un error'
            });
        });
}

module.exports.trigger = (event, context, callback) => {
    getReportProviders()
        .then((data) => {
            console.log(data);
            if (!data) {
                data = {
                    identity: 'reportADN',
                    count_mutant_dna: 0,
                    count_human_dna: 0,
                    ratio: 0
                };
            }

            if (event.Records[0].dynamodb.NewImage.mutan.N == 0) {
                data.count_human_dna += 1;
            } else {
                data.count_mutant_dna += 1;
            }
            data.ratio = data.count_mutant_dna / data.count_human_dna;
            setReportProviders(data).then(() => {
                callback(null, event);
            }).catch((err) => {
                console.log(err);
                callback(null, event);
            });
        })
        .catch((err) => {
            console.log(err);
            callback(null, event);
        });
}