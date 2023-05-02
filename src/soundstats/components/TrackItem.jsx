
export const TrackItem = ({position, title, artists, album, img}) => {
    return (
        <div className="glass-item p-5">
            <div className="flex flex-row items-center">
            
                <div className="flex flex-col mr-2 sm:mr-5">
                    <span>{position}°</span>
                </div>

                <div className="flex flex-col max-w-[48px] mr-2 sm:mr-5">
                    <img src={img}/>
                </div>

                <div className="flex flex-col mr-2 sm:mr-5">
                    <span className="font-semibold">{title}</span>
                    <span className="text-sm font-light">{artists}</span>
                </div>

                <div className="flex flex-col ml-auto">
                    <span className="font-semibold">{album}</span>
                </div>

                <div className="hidden sm:flex flex-col ml-auto">
                    <button className="px-4 py-2 font-semibold text-sm bg-[#1D8954] rounded-full shadow-sml">
                        <div className="flex flex-row space-x-3 items-center">
                            <img className="w-7" src="src/assets/spotify_white.png" />
                            <span>Play on Spotify</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex sm:hidden flex-row mt-3 mx-6">
                <button className="px-4 py-2 w-full font-semibold text-sm bg-[#1D8954] text-white rounded-full shadow-sml">
                    <div className="flex flex-row space-x-3 items-center justify-center">
                        <img className="w-7" src="src/assets/spotify_white.png" />
                        <span>Play on Spotify</span>
                    </div>
                </button>
            </div>
        </div>
    )
}
