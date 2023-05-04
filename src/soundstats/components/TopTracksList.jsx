import { useCallback, useEffect, useMemo, useState } from "react";
import { TrackItem } from "./";

export const TopTracksList = ({timeRange}) => {

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

  const getArtistsString = (artists) => {
    let artistsString = '';

    for (let i = 0; i < artists.length; i++) {
      if ( i === 0 ){
        artistsString += `${artists[i].name}`;
        continue;
      }
      
      artistsString += `, ${artists[i].name}`;
    }

    return artistsString;
  }

  return (
    <div className="glass-container mt-5 p-3 w-[95%] sm:w-[90%] lg:w-[90%] space-y-3">
        
        {
          (topTracks.length > 0)
            ? topTracks.map((track, index) => 
                  <TrackItem 
                    key={track.id}
                    position={index + 1}
                    title={track.name} 
                    artists={getArtistsString(track.artists)} 
                    album={track.album.name} 
                    img={track.album.images[2].url}
                    url={track.external_urls.spotify}
                  />
              )
            : <div className="flex justify-center">
                <div className="custom-loader"></div>
              </div>
        }
    </div>
  )
}
