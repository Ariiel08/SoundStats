import { GenreItem } from "./GenreItem"

export const TopGenresList = () => {
    return (
        <div className="glass-container mt-5 p-3 w-[90%] sm:w-[90%] lg:w-[90%] space-y-3">
            <GenreItem 
                position="1"
                title="Trap Latino" 
            />
        </div>
    )
}
