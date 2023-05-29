import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { getGenres } from "../helpers/getGenres";
import { useTopArtists } from "../hooks";
import { GenreItem } from "./GenreItem"

export const TopGenresList = ({timeRange}) => {

    const { userState, setUser } = useContext( UserContext );
    const [ genres, setGenres ] = useState([]);

    const topArtists = useTopArtists(timeRange, userState);


    useEffect(() => {
      
        if (genres.length <= 0 && topArtists) {
            getGenres(topArtists, userState, timeRange).then(
                data => setGenres(data)
            );
        }
      
    }, [topArtists]);

    return (
        <div className="glass-container mt-5 p-3 w-[95%] sm:w-[90%] lg:w-[90%] space-y-3">

            {
                (genres && genres.length > 0)
                    ?   genres.map((genre, index) => 
                            <GenreItem 
                                key={genre[0]}
                                position={index + 1}
                                title={genre[0].toUpperCase()} 
                                newPosition={genre[2]}
                            />
                        )
                    :   <div className="flex justify-center">
                            <div className="custom-loader"></div>
                        </div>
                
            }

            
        </div>
    )
}
