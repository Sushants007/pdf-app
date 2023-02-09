const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdfSchema = new Schema({
  pdfData: Buffer,
});

const Pdf = mongoose.model("Pdf", pdfSchema);

module.exports = Pdf;
