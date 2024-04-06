const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    weakness: { type: String, required: true },
    color: { type: String, required: true },
    evolution: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true }
});

module.exports = mongoose.model("pokemon", pokemonSchema);
