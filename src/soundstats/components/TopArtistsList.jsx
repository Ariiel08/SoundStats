import { ArtistItem } from "./ArtistItem";
import { useTopArtists } from "../hooks";

export const TopArtistsList = ({timeRange}) => {

    const topArtists = useTopArtists(timeRange);

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
                                url={artist.external_urls.spotify}
                            />
                        ) 
                    :   <div className="flex justify-center">
                            <div className="custom-loader"></div>
                        </div>
            }       
            
        </div>
    )
}
 