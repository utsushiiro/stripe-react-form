import React from "react";
import { injectStripe } from "react-stripe-elements";
import { CardElement } from "react-stripe-elements";
import { Button, Form, FormGroup, Label, Container } from "reactstrap";

class CheckoutForm extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label>Card details</Label>
            <CardElement />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default injectStripe(CheckoutForm);
