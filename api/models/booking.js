const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    place: {type: mongoose.Schema.Types.ObjectId, ref:'Place'},
    user: {type: mongoose.Schema.Types.ObjectId},
    name: String,
    checkIn: Date,
    checkOut: Date,
    addGuest: Number,
    price: Number,
})

const bookingModel = mongoose.model('Booking', bookingSchema);
module.exports = bookingModel;

