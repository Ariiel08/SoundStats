import { useCallback, useEffect, useMemo, useState } from "react";

export const useTopArtists = (timeRange) => {
  
    const [topArtists, setTopArtists] = useState([]);

    async function getTopArtists(timeRange) {
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

    const getTopArtistsMemoized = useMemo(() => {
        return getTopArtists(timeRange);
    }, []);

    const getTopArtistsCallback = useCallback(() => {
        getTopArtistsMemoized.then(data => {
            setTopArtists(data.items);
        });
    }, [getTopArtistsMemoized]);

    useEffect(() => {
        getTopArtistsCallback();
    }, [getTopArtistsCallback]);

    return topArtists;
}
