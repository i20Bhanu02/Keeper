import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createarea";

function App() {
  const [notes, modnotes] = useState([]);

  function addnote(title, body) {
    modnotes([...notes, { title, body }]);
  }

  function deletenote(id) {
    modnotes(
      notes.filter(function (val, idx) {
        return idx !== id;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addnote={addnote} />
      {notes.map(function (nt, idx) {
        return (
          <Note
            title={nt.title}
            body={nt.body}
            key={idx}
            id={idx}
            deletenote={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
