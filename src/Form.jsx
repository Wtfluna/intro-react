import { useState } from "react";

function Form({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onInputChange(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Form;