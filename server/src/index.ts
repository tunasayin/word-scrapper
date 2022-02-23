import express from "express";
import path from "path";

import apiRoute from "./routes/api";

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

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT}.`);
});
