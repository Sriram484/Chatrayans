import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from './config';

export const useFirestore = (fbcollection) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    const collectionRef = collection(db, fbcollection);

    const addDocument = async (document) => {
        try {
            const docRef = await addDoc(collectionRef, { ...document });
            setDocument(docRef);
        } catch (err) {
            setError(err);
        }
    };

    return { addDocument, document, error };
};
