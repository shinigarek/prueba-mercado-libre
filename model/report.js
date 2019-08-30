const dynamoose = require('dynamoose');

const { Schema } = dynamoose

const itemSchema = new Schema({
  identity: {
    type: String,
    hashKey: true
  },
  count_mutant_dna: Number,
  count_human_dna:  Number,
  ratio: Number
})

const Reports = dynamoose.model('REPORTS', itemSchema, { create: true });

module.exports = {
  Reports
};

