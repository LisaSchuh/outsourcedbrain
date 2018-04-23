import * as React from 'react';
import './App.css';
import { AppHeader } from './appHeader/appHeader';
import { FloatingButton } from '../components/floatingButton/floatingButton';
import { Note } from '../models/note';
import { NoteList } from './noteList/noteList';
import { NoteRepository } from '../repositories/noteRepository';


interface AppProps {
}
interface AppState {
  notes:Note[]
}

class App extends React.Component<AppProps, AppState> {
  private readonly repository:NoteRepository = new NoteRepository();

  constructor(public props:AppProps) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    this.updateListContent();
  }
  updateListContent = () => {
    this.repository.getAll().then((notes) => {
      this.setState({notes});
    })
  }

  addNote = () => {
    this.repository.add({
      title: "New note",
      content: "",
      tags: []
    }).then(this.updateListContent);
  }

  updateNote = (note:Note) => {
    this.repository.update(note).then(this.updateListContent);
  }

  deleteNote = (id:string) => {
    this.repository.delete(id).then(this.updateListContent);
  }
  public render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <NoteList notes={this.state.notes} onNoteChanged={this.updateNote} onNodeDeleted={this.deleteNote}></NoteList>
        <FloatingButton onClick={this.addNote} text="add"></FloatingButton>
      </div>
    );
  }
}

export default App;
