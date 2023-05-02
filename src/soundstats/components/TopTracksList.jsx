import { TrackItem } from "."

export const TopTracksList = () => {
  return (
    <div className="glass-container mt-5 p-3 w-[90%] sm:w-[90%] lg:w-[90%] space-y-3">
        <TrackItem 
            position="1"
            title="APA" 
            artists="Mora, Quevedo" 
            album="Paraíso" 
            img="https://cdns-images.dzcdn.net/images/cover/beddba296cb0e53098f8b478710c5bb9/500x500.jpg" 
        />

        <TrackItem 
            position="2"
            title="hARAkiRI" 
            artists="Duki, C.R.O" 
            album="hARAkiRI" 
            img="https://images.genius.com/8031612981750027c707c64544dd9ed9.1000x1000x1.png" 
        />
    </div>
  )
}
