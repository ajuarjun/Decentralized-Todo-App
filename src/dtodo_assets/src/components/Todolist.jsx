import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";
import Item from "./Item";

function Todolist(props) {
  return (
    <table className="list">
      <tbody>
        {props.list.map((item, i) => {
          return (
            <Item key={i} id={i} text={item} handleDelete={props.deleteItem} />
          );
        })}
      </tbody>
    </table>
  );
}

export default Todolist;
