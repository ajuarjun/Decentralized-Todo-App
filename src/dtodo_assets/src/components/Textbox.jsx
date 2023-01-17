import React, { useState } from "react";

function Textbox(props) {
  const [litem, setLitem] = useState("");

  function handleChange(event) {
    setLitem(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();
    setLitem("");
    props.addItem(litem);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          className="box"
          type="text"
          autoComplete="off"
          value={litem}
          placeholder="Add item to list"
        />
        <button onClick={handleAdd} className="button">
          +
        </button>
      </form>
    </div>
  );
}

export default Textbox;
