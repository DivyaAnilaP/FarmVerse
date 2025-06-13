import express from "express"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ProductRoutes from "./routes/products.route.js"
import CartRoutes from "./routes/cart.route.js"
import cookieParser from "cookie-parser";
import AuthRoutes from "./routes/auth.route.js"
import cors from "cors"

dotenv.config({ path: "./.env" }); // ✅ KEY FIX

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("✅ Server Started at http://localhost:" + PORT);
});
