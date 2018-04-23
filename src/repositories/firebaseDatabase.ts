import * as firebase from "firebase";
require("firebase/firestore");
import { Note } from "@models/note";

class FirebaseDatabase {
    private readonly db:firebase.firestore.Firestore;
    private readonly noteCollection:string = "notes";

    constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        };
        firebase.initializeApp(config);
        this.db = firebase.firestore();
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