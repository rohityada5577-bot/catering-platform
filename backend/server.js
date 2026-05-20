const express = require("express");

const cors = require("cors");

const app = express();


// middleware
app.use(cors());

app.use(express.json());


// routes
app.use(
  "/api/caterers",
  require("./routes/catererRoutes")
);


// test route
app.get("/", (req, res) => {
  res.send("API Running");
});


const PORT = 5000;


app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});