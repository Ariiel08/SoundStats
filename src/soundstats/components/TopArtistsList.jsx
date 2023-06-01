import { ArtistItem } from "./ArtistItem";
import { useTopArtists } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../../context";

export const TopArtistsList = ({timeRange}) => {

    const { userState, setUser } = useContext( UserContext );

    const { topArtists, isError } = useTopArtists(timeRange, userState);

    const reload = () => {
        location.reload();
    }

    if (!isError) {
        return (
            <div className="glass-container mt-5 p-3 w-[95%] sm:w-[90%] lg:w-[90%] space-y-3">
                
                {
                    (topArtists && topArtists.length > 0)
                        ?  topArtists.map((artist, index) =>
                                <ArtistItem 
                                    key={artist.id}
                                    position={index + 1}
                                    title={artist.name} 
                                    img={artist.images[2].url}
                                    url={artist.external_urls.spotify}
                                    newPosition={artist.newPosition}
                                    steps={artist.steps}
                                />
                            ) 
                        :   <div className="flex justify-center">
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
 