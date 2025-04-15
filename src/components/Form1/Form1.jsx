//1.0 Getting data from a form onSubmit

import React from "react";

const Form1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    // 1.1 to get the value of an input field target the name attributes of an input field
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" />
      <br />
      <input type="email" name="email" placeholder="Email" />
      <br />
      <br />
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default Form1;
