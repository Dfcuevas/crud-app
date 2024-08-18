import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import userRoutes from "./routes/users.route.js";
import cors from "cors";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cors());

const __dirname = path.resolve();

// Import routes
app.use("/api", userRoutes);

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectMongoDB();
});
