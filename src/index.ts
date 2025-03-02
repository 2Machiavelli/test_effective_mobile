import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import mongoose from "mongoose";
import "dotenv/config";

import appeal_routes from "./routers/appeal.route.js";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/appeal", appeal_routes);

const startServer = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    mongoose.connection.on("error", (error) => console.log(error));
    mongoose.connection.on("connected", () =>
      console.log("Database is connected!")
    );

    server.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
