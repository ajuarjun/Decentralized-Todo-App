import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Item(props) {
  return (
    <tr id={props.id} className="item">
      <td width="500px" className="content">
        {props.text}
      </td>
      <td width="20px" className="icon">
        <DeleteIcon onClick={() => props.handleDelete(props.id)} />
      </td>
    </tr>
  );
}

export default Item;
