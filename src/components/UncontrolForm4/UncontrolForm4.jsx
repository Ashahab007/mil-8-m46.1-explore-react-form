import React, { useRef } from "react";

const UncontrolForm4 = () => {
  // 4.1 define the useRef state hook
  const emailRef = useRef("");

  // 4.3
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("sb");
    console.log(emailRef.current);
    console.log(emailRef.current.value);

    //    4.4 set emailRef.current.value in email variable same do it for password
    const email = emailRef.current.value;
    console.log(email);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        {/* 4.2 pass on ref attributes */}
        <input ref={emailRef} type="email" name="" placeholder="Email" />
        <br />
        <input type="password" name="" placeholder="password" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default UncontrolForm4;
