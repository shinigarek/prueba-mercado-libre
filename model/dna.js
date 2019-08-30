const dynamoose = require('dynamoose');

const { Schema } = dynamoose

const itemSchema = new Schema({
  adn: {
    type: String,
    hashKey: true
  },
  mutan: {
    type: Number,
    rangeKey: true,
  }
})

const DNA = dynamoose.model('XMEN', itemSchema, { create: true });

module.exports = {
    DNA
};

