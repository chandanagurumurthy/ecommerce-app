const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

// Sample product data
const products = [
  { id: 1, name: "Shoes", price: 999 },
  { id: 2, name: "T-Shirt", price: 499 },
  { id: 3, name: "Watch", price: 1999 }
];

// API route


app.get("/", (req, res) => {
  res.send("E-commerce backend is running 🚀");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});