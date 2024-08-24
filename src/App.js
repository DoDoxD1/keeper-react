import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Note from "./components/note";
import notes from "./notes";

function createNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
