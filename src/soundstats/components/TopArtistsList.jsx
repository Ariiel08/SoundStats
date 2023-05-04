import { useCallback, useEffect, useMemo, useState } from "react";
import { ArtistItem } from "./ArtistItem";

export const TopArtistsList = ({timeRange}) => {

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

    return (
        <div className="glass-container mt-5 p-3 w-[90%] sm:w-[90%] lg:w-[90%] space-y-3">
            
            {
                (topArtists.length > 0)
                    ?  topArtists.map((artist, index) =>
                            <ArtistItem 
                                key={artist.id}
                                position={index + 1}
                                title={artist.name} 
                                img={artist.images[2].url}
                            />
                        ) 
                    :   <div className="flex justify-center">
                            <div className="custom-loader"></div>
                        </div>
            }       
            
        </div>
    )
}
 