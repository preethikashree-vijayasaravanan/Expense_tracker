const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  type: String,
  desc: String,
  amount: Number,
});

module.exports = mongoose.model("Transaction", schema);