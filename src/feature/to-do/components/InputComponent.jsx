import { useState } from "react";
import "./InputComponent.css";

const InputComponent = () => {
  const [item, setItem] = useState();
  console.log(item);
  //handle input Change
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="container">
      <input
        id="toDo"
        placeholder="Enter your To-do tasks"
        onChange={(e) => handleChange(e)}
      />
      <button> Add </button>

    </div>
  );
};

export default InputComponent;
