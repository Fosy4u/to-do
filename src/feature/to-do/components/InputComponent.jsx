import { useState } from "react";
import "./InputComponent.css";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState();
  const [items, setItems] = useState([]);

  console.log("Items is = ", items);
  //handle input Change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddClick = () => {
    setItems((items) => [...items, inputValue]);
  };

  return (
    <div className="container">
      <input
        id="toDo"
        type="search"
        placeholder="Enter your To-do tasks"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleAddClick}> Add </button>
    </div>
  );
};

export default InputComponent;
