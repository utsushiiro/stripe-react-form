require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_API_KEY);
stripe.setApiVersion("2019-03-14");

const create_customer = async (email, token_id) => {
  return await stripe.customers.create({
    email,
    source: token_id
  });
};

module.exports = {
  create_customer
};
