import * as React from 'react';
import './outsourcedBrain.css';
import { AppHeader } from './appHeader/appHeader';
import { FloatingButton } from '../components/floatingButton/floatingButton';
import { Note } from '../models/note';
import { NoteList } from './noteList/noteList';
import { NoteRepository } from '../repositories/noteRepository';


interface OutsourcedBrainProps {
}
interface OutsourcedBrainState {
  notes:Note[]
}

class OutsourcedBrain extends React.Component<OutsourcedBrainProps, OutsourcedBrainState> {
  private readonly repository:NoteRepository = new NoteRepository();

  constructor(public props:OutsourcedBrainProps) {
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
      <div className="OutsourcedBrain">
        <AppHeader></AppHeader>
        <NoteList notes={this.state.notes} onNoteChanged={this.updateNote} onNodeDeleted={this.deleteNote}></NoteList>
        <FloatingButton onClick={this.addNote} text="add"></FloatingButton>
      </div>
    );
  }
}

export default OutsourcedBrain;
