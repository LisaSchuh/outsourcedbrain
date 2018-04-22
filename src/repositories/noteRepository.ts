import { Note } from "../models/note";



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
}

const mock = new MockNoteDatabase();

export class NoteRepository {
    add(note:Note):Promise<void> {
        return Promise.resolve(mock.add(note));
    }    

    getAll():Promise<Note[]> {
        return Promise.resolve(mock.get());
    }
}