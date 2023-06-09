import spotifyLogo from '../../assets/spotify_white.png';

export const ArtistItem = ({position, title, img, url, newPosition, steps}) => {

    let icon = <div className="flex flex-col w-5 mr-3"></div>;

    if (newPosition) {
        if (newPosition === 'above') {

            icon =  <div className="tooltip">
                        <span className="tooltiptext text-sm">Moved up +{steps} positions</span>
                        <div className="flex flex-col items-center w-5 mr-3 text-green-500">
                            <ion-icon size="small" name="arrow-up-outline"></ion-icon>
                            <span className="text-sm">+{steps}</span>
                        </div>
                    </div>
        } else if (newPosition === 'below') {
            icon =  <div className="tooltip">
                        <span className="tooltiptext text-sm">Moved down -{steps} positions</span>
                        <div className="flex flex-col items-center w-5 mr-3 text-red-500">
                            <ion-icon size="small" name="arrow-down-outline"></ion-icon>
                            <span className="text-sm">-{steps}</span>
                        </div>
                    </div>
        } else if (newPosition === 'new') {
            icon =  <div className="tooltip">
                        <span className="tooltiptext">New to the list</span>
                        <div className="flex flex-col items-center w-5 mr-3 text-blue-500">
                            <ion-icon name="ellipse"></ion-icon>
                        </div>
                    </div>
        }
    }

    return (
        <div className="glass-item animate__animated animate__fadeIn p-5">
            <div className="flex flex-row items-center">
            
                {icon}

                <div className="flex flex-col mr-2 sm:mr-5">
                    <span>{position}°</span>
                </div>

                <div className="flex flex-col max-w-[48px] mr-2 sm:mr-5">
                    <img src={img}/>
                </div>

                <div className="flex flex-col mr-2 sm:mr-5">
                    <span className="font-semibold">{title}</span>
                </div>

                <div className="hidden sm:flex flex-col ml-auto">
                    <a 
                        href={url} target="_blank"
                        className="px-4 py-2 font-semibold text-sm bg-[#1D8954] hover:bg-[#30bc78] rounded-full shadow-sml">
                        <div className="flex flex-row space-x-3 items-center">
                            <img className="w-7" src={spotifyLogo} />
                            <span>Play on Spotify</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="flex sm:hidden flex-row mt-3 mx-6">
                <a 
                    href={url} target="_blank"
                    className="px-4 py-2 w-full font-semibold text-sm bg-[#1D8954] hover:bg-[#30bc78] text-white rounded-full shadow-sml">
                    <div className="flex flex-row space-x-3 items-center justify-center">
                        <img className="w-7" src={spotifyLogo} />
                        <span>Play on Spotify</span>
                    </div>
                </a>
            </div>
        </div>
    )

}
