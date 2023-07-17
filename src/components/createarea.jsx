import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

function CreateArea(pars) {
  const [title, edittitle] = useState("");
  const [body, editbody] = useState("");

  const [onclc, cngonclc] = useState(0);

  function ttlcng(props) {
    const val = props.target.value;
    edittitle(val);
  }

  function bdcng(props) {
    const val = props.target.value;
    editbody(val);
  }

  return (
    <div>
      <form className="create-note" action="#" method="#">

        {onclc?
        <input
          value={title}
          onChange={ttlcng}
          name="title"
          placeholder="Title"
        />
        :null}
        <textarea
          value={body}
          onClick={function(){
            cngonclc(1);
          }}
          onChange={bdcng}
          name="content"
          placeholder="Take a note..."
          rows={onclc?3:1}
        />
        <IconButton
          onClick={function () {
            pars.addnote(title, body);
            edittitle("");
            editbody("");
            cngonclc(0);
          }}
        >
          <AddIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default CreateArea;
