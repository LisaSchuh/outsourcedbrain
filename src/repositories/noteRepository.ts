import { Note } from "../models/note";
import { Guid }  from "guid-typescript";
import * as firebase from "firebase";
import { firebaseContext } from "./firebaseDatabase";


export class NoteRepository {
    update(note:Note):Promise<void> {
        return new Promise((resolve) => {
            firebaseContext.addOrUpdate(note)
                .then(() => { resolve() })
                .catch(this.handleError);
        }); 
    }
    add(note:Note):Promise<void> {
        note.id = Guid.create().toString();
        return new Promise((resolve) => {
            firebaseContext.addOrUpdate(note)
                .then(() => { resolve() })
                .catch(this.handleError);
        }); 
    }    
    delete(id:string):Promise<void> {
        return new Promise((resolve) => {
            firebaseContext.delete(id)
                .then(() => { resolve() })
                .catch(this.handleError);
        }); 
    }   
    getAll():Promise<Note[]> {
        return new Promise((resolve) => {
            firebaseContext.get()
                .then((data:firebase.firestore.QuerySnapshot) => { 
                    resolve(data.docs.map((note) => {
                        const data = note.data();
                        return {
                            id: note.id,
                            title: data.title,
                            content: data.content,
                            tags: data.tags
                        };
                    }));
                })
                .catch(this.handleError);
        }); 
    }

    private handleError = (error:any) => {
        console.error("Error on database request: ", error);
    };
}