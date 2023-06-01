import { useCallback, useEffect, useMemo, useState } from "react";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setVisitTime } from "../helpers";

export const useTopArtists = (timeRange, userId) => {
  
    const [ topArtists, setTopArtists ] = useState([]);
    const [ isError, setIsError ] = useState(false);

    async function getTopArtists() {
        const token = JSON.parse(localStorage.getItem('access_token'));
        let accessToken = token.access_token;
        
        const response = await fetch(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=50`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });

        if (!response?.ok) {
            console.error(`HTTP Response Code: ${response?.status}`);
            return null;
        }
        
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

                setVisitTime(timeRange, 'artists', false);

                const newDoc = doc(topArtistsCollection);
                await setDoc(newDoc, artistsDoc);

            } else {
                let artists = [];
                let lastVisit;
                let docId;

                docs.forEach(doc => {
                    artists = doc.data().artists;
                    lastVisit = Number(doc.data().lastVisit);
                    docId = doc.id;
                });

                const visitTime = setVisitTime(timeRange, 'artists', false);

                if (Date.now() >= (visitTime + 43200000)) {
                    setVisitTime(timeRange, 'artists', true);

                    if (Date.now() >= (lastVisit + 432000000)) {
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
                            data[index].steps = (index - idsIndex);
                        }else {
                            data[index].newPosition = 'above';
                            data[index].steps = (idsIndex - index);
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
            if (data) {
                setDBArtists(data.items).then(artists => setTopArtists(artists));
            } else {
                setIsError(true);  
            }
        });
    }, [userId]);

    useEffect(() => {
        getTopArtistsCallback();
    }, [getTopArtistsCallback]);

    return {
        topArtists,
        isError
    };
}
