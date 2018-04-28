import * as firebase from "firebase";
require("firebase/firestore");
import firebaseApp from "@config/firebaseApp"; 
import { Note } from "@models/note";

class FirebaseDatabase {
    private readonly db:firebase.firestore.Firestore;
    private readonly noteCollection:string = "notes";

    constructor() {
        this.db = firebaseApp.firestore();
    }

    get():Promise<firebase.firestore.QuerySnapshot> {
        return this.db.collection(this.noteCollection).get();
    }

    addOrUpdate(note:Note):Promise<void> {
        return this.db.collection(this.noteCollection).doc(note.id).set(note);
    }

    delete(id:string):Promise<void> {
        return this.db.collection(this.noteCollection).doc(id).delete();
    }
}

export const firebaseContext = new FirebaseDatabase();