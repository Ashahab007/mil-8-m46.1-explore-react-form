// Controlled form works with defaultValue and onChange. As we want to control the form  onChange so we use useState. There is an another attributes name required which will prevent submit if the field is empty. but our requirement is we will control the form on password typing.

import React, { useState } from "react";

const ControlledForm3 = () => {
  // 3.2 declare a state
  const [password, setPassword] = useState("");

  const handlePasswordOnChange = (e) => {
    console.log("changed");
    // 3.3 set password onChange
    setPassword(password);
    console.log(password);
    console.log(e.target.value);
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
    </div>
  );
};

export default ControlledForm3;
