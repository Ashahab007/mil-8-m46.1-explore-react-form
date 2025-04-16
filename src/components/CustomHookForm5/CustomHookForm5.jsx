import React from "react";
import useInputField from "../../hooks/useInputField";
// In controlled form we have to declare multiple state for multiple input field to get the data. That's why it creates a lot of code duplication. To solve this u can create custom hooks to avoid code duplication.

// 5.1 first create a custom hook in src file
const CustomHookForm5 = () => {
  // 5.4 here, custom hook is destructured & used to get data from input field name, email & password
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("sub", name, email, password);
    // console.log('sub');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          //   5.5 assign the name & nameOnChange in defaultValue & onChange to get the data from input
          defaultValue={name}
          onChange={nameOnChange}
          name=""
          placeholder="name"
        />
        <br />
        <input
          type="email"
          defaultValue={email}
          onChange={emailOnChange}
          name=""
          placeholder="email"
        />
        <br />
        <input
          type="password"
          defaultValue={password}
          onChange={passwordOnChange}
          name=""
          placeholder="password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CustomHookForm5;
