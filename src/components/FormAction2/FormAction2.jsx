//2.0 Getting data from a form action
import React from "react";

// 2.1 for form action u have to pass a parameter on handleFormAction which will get the data of name attributes
const handleFormAction = (formData) => {
  console.log(formData);
  console.log(formData.get("name"));
  console.log(formData.get("email"));
};

const FormAction2 = () => {
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormAction2;
