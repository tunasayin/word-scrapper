import express from "express";
import dotenv from "dotenv";
import path from "path";

import apiRoute from "./routes/api";

// Initialize dotenv
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

// Express app instance
const app = express();

// React build folder path
const buildFolder = path.join(__dirname, "..", "..", "client", "build");

// Routes
app.use("/api", apiRoute);

// App configuration
app.use("/", express.static(buildFolder));

// Send react build for all routes
app.get("/*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(buildFolder, "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}.`);
});
