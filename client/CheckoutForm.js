import React from "react";
import { injectStripe } from "react-stripe-elements";
import { CardElement } from "react-stripe-elements";
import { Button, Form, FormGroup, Label, Container } from "reactstrap";
import axios from "axios";

class CheckoutForm extends React.Component {
  async handleSubmit(e) {
    e.preventDefault();
    const { token, error } = await this.props.stripe.createToken();
    if (error == null) {
      await axios.post("http://localhost:3001/register", {
        email: "utsushiiro@example.com",
        token: token
      });
    } else {
      console.log(error);
    }
  }

  render() {
    return (
      <Container className="pt-4">
        <Form onSubmit={e => this.handleSubmit(e)}>
          <FormGroup>
            <Label>Card details</Label>
            <CardElement hidePostalCode={true} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default injectStripe(CheckoutForm);
