const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "react-redux-project-kudoo39.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.post("/v1/update", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, [2000]);
});

app.listen(process.env.PORT || 8000, () => {
  console.log("server is running...");
});
