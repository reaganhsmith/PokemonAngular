const Sequence = require('../models/sequence');

let sequenceId = null;

const sequenceGenerator = {
  async init() {
    try {
      const sequence = await Sequence.findOne({}).exec();
      if (!sequence) {
        throw new Error('Sequence not found');
      }
      sequenceId = sequence._id;
    } catch (err) {
      console.error('Error initializing SequenceGenerator:', err);
      throw err;
    }
  },

  async nextId(collectionType) {
    // Ensure the generator is initialized. If not, call the init() function above.
    if (!sequenceId) {
      await this.init();
    }

    let updateObject = {};
    let nextId;

    try {
      // Await the nextId function call to resolve the Promise
      switch (collectionType) {
        case 'pokemon':
          const maxPokemonId = await this.nextPokemonId();
          nextId = maxPokemonId.toString(); // Convert to string
          updateObject = { maxPokemonId: maxPokemonId };
          break;
        default:
          return -1;
      }

      // Update the sequence collection with the new maximum ID
      await Sequence.updateOne({ _id: sequenceId }, { $set: updateObject });

      return nextId;
    } catch (err) {
      console.log("nextId error = " + err);
      return null;
    }
  },


  async nextPokemeonId() {
    const sequence = await Sequence.findOneAndUpdate({}, { $inc: { maxPokemonId: 1 } }, { new: true });
    return sequence.maxPokemontId;
  }
};

module.exports = sequenceGenerator;
