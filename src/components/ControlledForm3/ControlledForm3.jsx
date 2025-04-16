// Getting data from a controlled from. Controlled form works with defaultValue and onChange. here with the use of defaultValue we can get the password field data. As we want to control the form  onChange so we use useState. There is an another attributes name required which will prevent submit if the field is empty. but our requirement is we will control the form on password typing. but there is a problem in controlled form which is for every field u have to declare a state which will increase the amount of code. To minimize this use object method which will learn later.

import React, { useState } from "react";

const ControlledForm3 = () => {
  // 3.2 declare a state
  const [password, setPassword] = useState("");

  // 3.5 show message on password typing
  const [message, setMessage] = useState("");

  const handlePasswordOnChange = (e) => {
    console.log("changed");
    // 3.3 set password onChange
    setPassword(e.target.value);
    console.log(password);
    console.log(e.target.value);

    // 3.6 check the password condition is matched
    if (password.length < 6) {
      setMessage("Password must be more then 6 characters");
    } else {
      setMessage("");
    }
    // Note: if u want to show the message after clicking submit button use this condition in handleOnSubmit.
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        {/* 3.1 apply onChange and defaultValue */}
        <input
          type="password"
          onChange={handlePasswordOnChange}
          //   3.4 Now set the dynamic changeable password in defaultValue
          defaultValue={password}
          name="password"
        />

        <br />
        <button type="submit">Submit</button>
      </form>
      {/* 3.7 Show the message here*/}
      <p>{message}</p>
    </div>
  );
};

export default ControlledForm3;
