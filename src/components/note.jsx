import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <IconButton
        onClick={function () {
          props.deletenote(props.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Note;
