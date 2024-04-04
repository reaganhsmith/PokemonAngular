const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    maxPokemonId: {type: Number, require: true}
});

module.exports = mongoose.model("Sequence", sequenceSchema);