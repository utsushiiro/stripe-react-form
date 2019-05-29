const stripe = require("./stripe");

const app = require("express")();
app.use(require("cors")());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const customer = await stripe.create_customer(req.body.email, req.body.token.id);
  console.log(customer);
  res.sendStatus(200);
});

app.listen(3001, () => console.log("Server listening on port 3001..."));
