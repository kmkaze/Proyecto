const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const TattoosSchema = new Schema({
    tattos_id:{type: String, require: true, max:60},
    style:{type: String, require: true, max:40},
    ubicacion:{type: String, require: true, max:40},
    dimension:{type: Number, require: true, max:45},
});

module.exports = mongoose.model("tattoos", TattoosSchema);