const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Import Routes
const paymentRoutes = require("./routes/payment");
const barangRoutes = require("./routes/barang");
app.use("/payment", paymentRoutes);
app.use("/barang", barangRoutes);

//Koneksi Database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Koneksi Berhasil");
  })
  .catch((err) => {
    console.log("Koneksi Database Gagal", err);
    process.exit();
  });

//Route Awal
app.get("/", (req, res) => {
  res.json({
    message: "API",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Mongo Connect at http://localhost:${process.env.PORT}`);
});
