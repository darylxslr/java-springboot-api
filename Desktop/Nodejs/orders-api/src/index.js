import express from "express";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/orders", orderRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});