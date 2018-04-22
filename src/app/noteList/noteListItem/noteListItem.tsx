import * as React from 'react';
import { Note } from '../../../models/note';

export interface NoteListItemProps {
    note:Note;
    active: boolean;
}
export class NoteListItem extends React.Component<NoteListItemProps> {
    constructor(public props:NoteListItemProps) {
        super(props);
    }

    public render() {
        return <div>
            <div>{this.props.note.title}</div>
            <div>{this.props.note.content}</div>
            <div>{this.props.note.tags.join(',')}</div>
        </div>;
    }
 }