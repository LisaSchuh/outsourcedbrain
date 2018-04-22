import * as React from 'react';
import { Note } from '../../models/note';
import './noteList';
import { NoteListItem } from './noteListItem/noteListItem';

export interface NoteListProps {
    notes: Note[]
}
export interface NoteListState {
    notes: Note[],
    activeNode: string
}

export class NoteList extends React.Component<NoteListProps, NoteListState> {
    
    constructor(public props:NoteListProps) {
        super(props);
        this.state = {
            notes: props.notes,
            activeNode: ""
        };
    }

    static getDerivedStateFromProps(nextProps:NoteListProps, prevState:NoteListState) {
        return {
        notes: nextProps.notes
        };
      }

    public render() {
        return <ul>
            {this.state.notes.map(n => <NoteListItem note={n} active={false}></NoteListItem>)}
        </ul>;
    }

}