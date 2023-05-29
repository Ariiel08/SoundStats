import { useCallback, useEffect, useMemo, useState } from "react";
import { collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const useTopTracks = (timeRange, userId) => {
    
    const [ topTracks, setTopTracks ] = useState([]);

    async function getTopTracks() {
        const token = JSON.parse(localStorage.getItem('access_token'));
        let accessToken = token.access_token;
        
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=50`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        
        const data = await response.json();
        return data;
    }

    async function setDBTracks(data) {

        if (userId) {

            const topTracksCollection = collection(FirebaseDB, `${userId}/toptracks/${timeRange}`);
            const docs = await getDocs(topTracksCollection);
            const ids = data.items.map(x => x.id);
            
            if (!docs._docs.length) {
                const tracksDoc = {
                    lastVisit: Date.now(),
                    tracks: ids
                }

                let visitTime = localStorage.getItem('visit_time');

                if (!visitTime) {
                    localStorage.setItem('visit_time', Date.now());
                }

                const newDoc = doc(topTracksCollection);
                await setDoc(newDoc, tracksDoc);

            } else {
                let tracks = [];
                let lastVisit;
                let docId;

                docs.forEach(doc => {
                    tracks = doc.data().tracks;
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
                        const tracksDoc = {
                            lastVisit: Date.now(),
                            tracks: ids
                        }
        
                        const docRef = doc(FirebaseDB, `${userId}/toptracks/${timeRange}`, docId);
                        await updateDoc(docRef, tracksDoc);
                    }
                }
                
                let idsIndex = 0;

                ids.forEach((id, index) => {
                    idsIndex = tracks.findIndex(x => {
                        if (x === id) {
                            return x;
                        }
                    });

                    if (index !== idsIndex && idsIndex >= 0) {
                        if (index > idsIndex) {
                            data.items[index].newPosition = 'below';
                        }else {
                            data.items[index].newPosition = 'above';
                        }
                    } else if (idsIndex === -1) {
                        data.items[index].newPosition = 'new';
                    }
                });
            }

            return data.items;
            
        }

        
    }

    const getTopTracksMemoized = useMemo(() => {
        return getTopTracks();
    }, []);

    const getTopTracksCallback = useCallback(() => {
        getTopTracksMemoized.then(data => {
            setDBTracks(data).then(tracks => setTopTracks(tracks));
        });
    }, [userId]);

    useEffect(() => {
        getTopTracksCallback();
    }, [getTopTracksCallback]);

    return topTracks;
}
