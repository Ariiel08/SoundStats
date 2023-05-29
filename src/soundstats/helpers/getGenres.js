import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

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

    if ({userId}) {

        const topGenresCollection = collection(FirebaseDB, `${userId}/topgenres/${timeRange}`);
        const docs = await getDocs(topGenresCollection);
        const genres = data.map(x => x[0]);

        if (!docs._docs.length && genres.length > 0) {

            const genresDoc = {
                lastVisit: Date.now(),
                genres
            }

            let visitTime = localStorage.getItem('visit_time');

            if (!visitTime) {
                localStorage.setItem('visit_time', Date.now());
            }

            const newDoc = doc(topGenresCollection);
            await setDoc(newDoc, genresDoc);

        } else {
            let genresFromDB = [];
            let lastVisit;
            let docId;

            docs.forEach(doc => {
                genresFromDB = doc.data().genres;
                lastVisit = doc.data().lastVisit;
                docId = doc.id;
            });

            let visitTime = localStorage.getItem('visit_time');

            if (!visitTime) {
                localStorage.setItem('visit_time', Date.now());
                visitTime = localStorage.getItem('visit_time');
            }

            if (Date.now() >= (visitTime + 18000000)) {
                localStorage.setItem('visit_time', Date.now());

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
                    }else {
                        data[index][2] = 'above';
                    }
                } else if (genresDBIndex === -1) {
                    data[index][2] = 'new';
                }
            });
        }

        return data;

    }
}
