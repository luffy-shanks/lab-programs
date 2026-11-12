const express = require("express");

const app = express();
const port = 3000;
let products = [
  { id: 1, name: "Notebook", price: 50 },
  { id: 2, name: "Pen", price: 10 }
];

app.use(express.json());

// Retrieve all resources
app.get("/products", (request, response) => response.json(products));

// Accept data and create a resource
app.post("/products", (request, response) => {
  const { name, price } = request.body;
  if (!name || price === undefined) {
    return response.status(400).json({ error: "name and price are required" });
  }

  const product = { id: Date.now(), name, price };
  products.push(product);
  response.status(201).json(product);
});

// Delete a specified resource
app.delete("/products/:id", (request, response) => {
  const id = Number(request.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) return response.status(404).json({ error: "Product not found" });

  const deletedProduct = products.splice(productIndex, 1)[0];
  response.json({ message: "Product deleted", deletedProduct });
});

app.listen(port, () => console.log(`API running at http://localhost:${port}/products`));
