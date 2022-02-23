import express from "express";
import path from "path";

import apiRoute from "./routes/api";

// Express app instance
const app = express();

// React build folder path
const buildFolder = path.join(__dirname, "..", "..", "client", "build");

// Server port
const port = process.env.PORT || 3000;

// Routes
app.use("/api", apiRoute);

// App configuration
app.use("/", express.static(buildFolder));

// Send react build for all routes
app.get("/*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(buildFolder, "index.html"));
});

app.listen(port, () => {
  console.log(`Server started at port ${port}.`);
});
