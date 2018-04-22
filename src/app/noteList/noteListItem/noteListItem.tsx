import * as React from 'react';
import { Note } from '../../../models/note';

export interface NoteListItemProps {
    note:Note;
    onChange:(note:Note) => void;
    onDelete:() => void;
    active: boolean;
}
export class NoteListItem extends React.Component<NoteListItemProps> {
    constructor(public props:NoteListItemProps) {
        super(props);
    }

    public render() {
        return <div>
            <div><input value={this.props.note.title} onChange={this.handleTitleChange}></input></div>
            <div><textarea value={this.props.note.content} onChange={this.handleContentChange}></textarea></div>
            <div>{this.props.note.tags.join(',')}</div>
            <button onClick={this.props.onDelete}>Delete</button>
        </div>;
    }

    private handleTitleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const note = this.props.note;
        note.title = event.target.value;
        this.props.onChange(note);
    }

    private handleContentChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const note = this.props.note;
        note.content = event.target.value;
        this.props.onChange(note);
    }
 }