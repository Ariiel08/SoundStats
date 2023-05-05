import { useCallback, useEffect, useMemo, useState } from "react";

export const useTopTracks = (timeRange) => {
    
    const [topTracks, setTopTracks] = useState([]);

    async function getTopTracks(timeRange) {
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

    const getTopTracksMemoized = useMemo(() => {
        return getTopTracks(timeRange);
    }, []);

    const getTopTracksCallback = useCallback(() => {
        getTopTracksMemoized.then(data => {
            setTopTracks(data.items);
        });
    }, [getTopTracksMemoized]);

    useEffect(() => {
        getTopTracksCallback();
    }, [getTopTracksCallback]);

    return topTracks;
}
