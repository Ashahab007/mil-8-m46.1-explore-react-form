import { useState } from "react";

import "./App.css";
import Form from "./components/Form1/Form1";
import Form1 from "./components/Form1/Form1";
import FormAction2 from "./components/FormAction2/FormAction2";
import ControlledForm3 from "./components/ControlledForm3/ControlledForm3";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      <h3>Form On Submit</h3>
      <Form1></Form1>
      <br />
      <h3>Form On Action</h3>
      <FormAction2></FormAction2>
      <br />
      <h3>Controlled Form</h3>
      <ControlledForm3></ControlledForm3>
    </>
  );
}

export default App;
