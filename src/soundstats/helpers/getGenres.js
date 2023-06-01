import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setVisitTime } from "./setVisitTime";

export const getGenres = async(artists, userId, timeRange) => {

    let allGenres = [];
    let topGenres = {};

    for (const artist of artists) {
        allGenres.push(...artist.genres);
    }

    for (const genre of allGenres) {

        if(Object.keys(topGenres).length >= 50){
            break;
        }

        if(!topGenres.hasOwnProperty(genre)){
            topGenres[genre] = 1;
            continue;
        } 
        
        topGenres[genre]++;
    }

    let sortedGenres = Object.entries(topGenres).sort((a,b) => b[1] - a[1]);

    sortedGenres = await setDBGenres(sortedGenres, userId, timeRange);

    return sortedGenres;
}

const setDBGenres = async(data, userId, timeRange) => {

    if (userId) {

        const topGenresCollection = collection(FirebaseDB, `${userId}/topgenres/${timeRange}`);
        const docs = await getDocs(topGenresCollection);
        const genres = data.map(x => x[0]);

        if (!docs._docs.length && genres.length > 0) {

            const genresDoc = {
                lastVisit: Date.now(),
                genres
            }

            setVisitTime(timeRange, 'genres', false);

            const newDoc = doc(topGenresCollection);
            await setDoc(newDoc, genresDoc);

        } else {
            let genresFromDB = [];
            let lastVisit;
            let docId;

            docs.forEach(doc => {
                genresFromDB = doc.data().genres;
                lastVisit = Number(doc.data().lastVisit);
                docId = doc.id;
            });

            const visitTime = setVisitTime(timeRange, 'genres', false);

            if (Date.now() >= (visitTime + 18000000)) {
                setVisitTime(timeRange, 'genres', true);

                if (Date.now() >= (lastVisit + 86400000)) {
                    const genresDoc = {
                        lastVisit: Date.now(),
                        genres
                    }
    
                    const docRef = doc(FirebaseDB, `${userId}/topgenres/${timeRange}`, docId);
                    await updateDoc(docRef, genresDoc);
                }
            }
            
            let genresDBIndex = 0;

            genres.forEach((id, index) => {
                genresDBIndex = genresFromDB.findIndex(x => {
                    if (x === id) {
                        return x;
                    }
                });

                if (index !== genresDBIndex && genresDBIndex >= 0) {
                    if (index > genresDBIndex) {
                        data[index][2] = 'below';
                        data[index][3] = (index - genresDBIndex);
                    }else {
                        data[index][2] = 'above';
                        data[index][3] = (genresDBIndex - index);
                    }
                } else if (genresDBIndex === -1) {
                    data[index][2] = 'new';
                }
            });
        }

        return data;

    }
}
