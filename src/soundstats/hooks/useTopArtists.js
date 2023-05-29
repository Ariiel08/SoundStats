import { useCallback, useEffect, useMemo, useState } from "react";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const useTopArtists = (timeRange, userId) => {
  
    const [ topArtists, setTopArtists ] = useState([]);

    async function getTopArtists() {
        const token = JSON.parse(localStorage.getItem('access_token'));
        let accessToken = token.access_token;
        
        const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=50`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        
        const data = await response.json();
        return data;
    }

    async function setDBArtists(data) {
        
        if (userId) {

            const topArtistsCollection = collection(FirebaseDB, `${userId}/topartists/${timeRange}`);
            const docs = await getDocs(topArtistsCollection);
            const ids = data.map(x => x.id);

            if (!docs._docs.length) {

                const artistsDoc = {
                    lastVisit: Date.now(),
                    artists: ids
                }

                let visitTime = localStorage.getItem('visit_time');

                if (!visitTime) {
                    localStorage.setItem('visit_time', Date.now());
                }

                const newDoc = doc(topArtistsCollection);
                await setDoc(newDoc, artistsDoc);

            } else {
                let artists = [];
                let lastVisit;
                let docId;

                docs.forEach(doc => {
                    artists = doc.data().artists;
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
                        const artistsDoc = {
                            lastVisit: Date.now(),
                            artists: ids
                        }
        
                        const docRef = doc(FirebaseDB, `${userId}/topartists/${timeRange}`, docId);
                        await updateDoc(docRef, artistsDoc);
                    }
                }
                
                let idsIndex = 0;

                ids.forEach((id, index) => {
                    idsIndex = artists.findIndex(x => {
                        if (x === id) {
                            return x;
                        }
                    });

                    if (index !== idsIndex && idsIndex >= 0) {
                        if (index > idsIndex) {
                            data[index].newPosition = 'below';
                        }else {
                            data[index].newPosition = 'above';
                        }
                    } else if (idsIndex === -1) {
                        data[index].newPosition = 'new';
                    }
                });
            }

            return data;

        }
    }

    const getTopArtistsMemoized = useMemo(() => {
        return getTopArtists();
    }, []);

    const getTopArtistsCallback = useCallback(() => {
        getTopArtistsMemoized.then(data => {
            setDBArtists(data.items).then(artists => setTopArtists(artists));
        });
    }, [userId]);

    useEffect(() => {
        getTopArtistsCallback();
    }, [getTopArtistsCallback]);

    return topArtists;
}
