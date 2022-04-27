const { Schema, model } = require("mongoose");

const PaymentSchema = Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    pembelian: {
      type: Array,
      required: true,
    },
    pembayaran: {
      type: String, //cod,transfer bank, va
      required: true,
    },
    total_harga: {
      type: Number,
      required: true,
    },
    status_pesanan: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("payments", PaymentSchema);
