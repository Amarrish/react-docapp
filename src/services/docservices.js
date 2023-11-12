import { db } from "../firebase/config";

import { getDoc, getDocs, updateDoc, deleteDoc, addDoc, collection, doc } from "firebase/firestore";

const DocCollectionRef = collection(db,"docs")

class DocDataServices {
    adddocument = (newdocument) =>{
        return addDoc(DocCollectionRef, newdocument)
    }


    updatedocument = (id, updateddocument) =>{
        const documentDoc = doc(db, "docs", id)
        return updateDoc(documentDoc, updateddocument)
    }

    deletedocument = (id)=>{
        const documentDoc = doc(db, "docs", id)
        return deleteDoc(documentDoc)
    }

    getalldocuments = () =>{
        return getDocs(DocCollectionRef)
    }

    getdocument = (id) =>{
        const documentDoc = doc(db, "docs", id)
        return getDoc(documentDoc)
    }
}

export default new DocDataServices()