import { getGenres } from "../helpers/getGenres";
import { useTopArtists } from "../hooks";
import { GenreItem } from "./GenreItem"

export const TopGenresList = ({timeRange}) => {

    const topArtists = useTopArtists(timeRange);

    const genres = getGenres(topArtists);

    return (
        <div className="glass-container mt-5 p-3 w-[90%] sm:w-[90%] lg:w-[90%] space-y-3">

            {
                (genres.length > 0)
                    ?   genres.map((genre, index) => 
                            <GenreItem 
                                key={genre[0]}
                                position={index + 1}
                                title={genre[0]} 
                            />
                        )
                    :   <div className="flex justify-center">
                            <div className="custom-loader"></div>
                        </div>
                
            }

            
        </div>
    )
}
