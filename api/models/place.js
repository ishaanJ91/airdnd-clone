const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    address: String,
    addedPhotos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Date,
    checkOut: Date,
    maxGuests: Number,  
    price: Number,
    bedroom: Number,
    bathroom: Number,
    bed: Number,
})

const PlaceModel = mongoose.model('Place', placeSchema);
module.exports = PlaceModel;

