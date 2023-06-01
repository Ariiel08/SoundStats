import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { getGenres } from "../helpers/getGenres";
import { useTopArtists } from "../hooks";
import { GenreItem } from "./GenreItem"

export const TopGenresList = ({timeRange}) => {

    const { userState, setUser } = useContext( UserContext );
    const [ genres, setGenres ] = useState([]);

    const { topArtists, isError } = useTopArtists(timeRange, userState);

    const reload = () => {
        location.reload();
    }

    useEffect(() => {
      
        if (genres && genres.length <= 0 && topArtists) {
            getGenres(topArtists, userState, timeRange).then(
                data => setGenres(data)
            );
        }
      
    }, [topArtists]);

    if (!isError) {
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
                                    steps={genre[3]}
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
