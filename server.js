import express from "express";

const app = express();
app.use(express.static("Coursework"));
app.listen(8080);