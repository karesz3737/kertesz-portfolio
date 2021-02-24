const express = require("express");
const cors = require("cors");
const SendUserEmail = require("./mail");
const validate = require("./validation/validate");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.post("/", (req, res) => {
  const { email, subject, text, name } = req.body;
  const value = validate(email, subject, text, name);
  const specialChar = "Special Characters Are not Allowed!!!";
  console.log(value);
  if (value !== undefined) {
    const responsBack =
      value.path[0] === "subject" || value.path[0] === "text"
        ? specialChar
        : value.message;
    res.send(responsBack);
    return;
  }

  SendUserEmail(email, subject, text, name, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Thank You!");
    }
  });
});
app.listen(PORT, () => {});
