const mongoose = require('mongoose');

//schema for our omodel/table

const tourScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name']
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    description: {
        type: String
    },
    plan: {
        type: String,
        required: [true, 'A tour must have a plan'],
        enum: {
            value: ['Silver', 'Gold','Diamond'],
            message: 'Plan is either silver, gold or diamond'
        }
    }
});

const tourmodel = mongoose.model('Tour', tourSchema);

module.exports = tourModel;