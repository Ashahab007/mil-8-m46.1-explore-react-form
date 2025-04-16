import { useState } from "react";

// 5.2 Create a custom hook

const useInputField = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  //  5.3 declare the handleOnChange here
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, handleOnChange]; //here, array is used in return because it will destructured in CustomHookForm5
};

export default useInputField;
