import { ArtistItem } from "./ArtistItem";

 export const TopArtistsList = () => {
    return (
        <div className="glass-container mt-5 p-3 w-[90%] sm:w-[90%] lg:w-[90%] space-y-3">
            <ArtistItem 
                position="1"
                title="Eladio Carrion" 
                img="https://i.scdn.co/image/ab6761610000517487ff3d09a0fdb1fbdaed417b"
            />
        </div>
    )
 }
 