import { Note } from "../models/note";
import { Guid }  from "guid-typescript";


class MockNoteDatabase {
    private notes:Note[];

    constructor() {
        this.notes = [];
    }
    get():Note[] {
        return this.notes;
    }

    add(note:Note) {
        this.notes.push(note);
    }

    update(note:Note) {
        const index = this.notes.map((n) => n.id).indexOf(note.id);
        if(index < 0) throw `no note with id ${note.id} found to update`;

        this.notes[index] = note;
    }

    delete(id:string) {
        const index = this.notes.map((n) => n.id).indexOf(id);
        if(index < 0) throw `no note with id ${id} found to update`;

        this.notes.splice(index, 1);
    }
}

const mock = new MockNoteDatabase();

export class NoteRepository {
    update(note:Note):Promise<void> {
        return Promise.resolve(mock.update(note));
    }
    add(note:Note):Promise<void> {
        note.id = Guid.create().toString();
        return Promise.resolve(mock.add(note));
    }    
    delete(id:string):Promise<void> {
        return Promise.resolve(mock.delete(id));
    }   
    getAll():Promise<Note[]> {
        return Promise.resolve(mock.get());
    }
}