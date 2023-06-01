import { TrackItem } from "./";
import { useTopTracks } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../../context";

export const TopTracksList = ({timeRange}) => {

  const { userState, setUser } = useContext( UserContext );

  let { topTracks, isError } = useTopTracks(timeRange, userState);

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

  const reload = () => {
	location.reload();
  }

  if (!isError) {
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
                      steps={track.steps}
                    />
                )
              : <div className="flex justify-center">
                  <div className="custom-loader"></div>
                </div>
          }
      </div>
    )
  } else {
	return (
		<div className="glass-container mt-5 px-3 py-5 w-[95%] sm:w-[90%] lg:w-[90%] space-y-3">
			<div className="flex flex-col items-center space-y-5">
				<span className="text-lg">Something went wrong :(</span>

				<button 
					className="px-4 py-2 font-semibold bg-[#1D8954] hover:bg-[#30bc78] text-white rounded-full"
					onClick={reload}
				>
					<div className="flex flex-row space-x-3 items-center justify-center">
						<span>Press to try again</span>
					</div>
				</button>
			</div>
		</div>
	)
  }

}
