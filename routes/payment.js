const routerPayment = require("express").Router();
const Payment = require("../models/payment");

//CREATE
routerPayment.post("/", async (req, res) => {
  const paymentPost = new Payment({
    nama: req.body.nama,
    alamat: req.body.alamat,
    pembelian: req.body.pembelian,
    pembayaran: req.body.pembayaran,
    total_harga: req.body.total_harga,
  });

  try {
    const payment = await paymentPost.save();
    res.json(payment);
  } catch (err) {
    res.status(400).send(err);
  }
});

//READ
routerPayment.get("/", async (req, res) => {
  try {
    const getPayment = await Payment.find();
    res.json(getPayment);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE
routerPayment.put("/:paymentId", async (req, res) => {
  try {
    const updatePayment = await Payment.updateOne(
      { _id: req.params.paymentId },
      {
        nama: req.body.nama,
        alamat: req.body.alamat,
      }
    );
    res.json(updatePayment);
  } catch (err) {
    res.status(304).send(err);
  }
});

//DELETE
routerPayment.delete("/:paymentId", async (req, res) => {
  try {
    const deletePayment = await Payment.deleteOne({
      _id: req.params.paymentId,
    });
    res.json(deletePayment);
  } catch (err) {
    res.status(304).send(err);
  }
});
module.exports = routerPayment;
