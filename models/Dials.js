var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DialSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    contact: {
        type: Boolean,
        required: true,
        default: false
    },
    scheduled: {
        type: Boolean,
        required: true,
        default: false
    },
    dialer: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

var Dials = mongoose.model("Dials", DialSchema)

module.exports = Dials


/// Options for type:

// 1A Cashflow Prospect Dials
// 1B BusinessOwner Prospect Dials
// 2A Cashflow Client Dials
// 2B BusinessOwner Client Dials
// 3A Cashflow Natural Dials
// 3B BusinessOwner Natual Dials
// 4A Cashflow Vertical Dials
// 4B BusinessOwner Vertical Dials
// 5A Cashflow Target Dials
// 5B BusinessOwner Target Dials