import { todoRoutes } from "./routes/todoRoutes.mjs";
import { authRoutes } from "./routes/authRoutes.mjs";
import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.use("/api/v1", todoRoutes);
app.use("/api/v1", authRoutes);

app.listen(PORT, () => {
  console.log(`example server listining on PORT ${PORT}`);
});