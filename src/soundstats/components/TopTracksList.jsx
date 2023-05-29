import { TrackItem } from "./";
import { useTopTracks } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../../context";

export const TopTracksList = ({timeRange}) => {

  const { userState, setUser } = useContext( UserContext );

  let topTracks = useTopTracks(timeRange, userState);

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
          (topTracks && topTracks.length > 0)
            ? topTracks.map((track, index) => 
                  <TrackItem 
                    key={track.id}
                    position={index + 1}
                    title={track.name} 
                    artists={getArtistsString(track.artists)} 
                    album={track.album.name} 
                    img={track.album.images[2].url}
                    url={track.external_urls.spotify}
                    newPosition={track.newPosition}
                  />
              )
            : <div className="flex justify-center">
                <div className="custom-loader"></div>
              </div>
        }
    </div>
  )
}
