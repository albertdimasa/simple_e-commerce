const { Schema, model } = require("mongoose");

const BarangSchema = Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("barang", BarangSchema);
