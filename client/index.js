import { render } from "react-dom";
import * as React from "react";
import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app-root"));
});
