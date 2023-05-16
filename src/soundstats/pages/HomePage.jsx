import { loginSpotify } from "../../spotify-auth";
import spotifyLogo from '../../assets/spotify_white.png';

export const HomePage = () => {

    return (
        <>
            <div className="h-[62vh] flex flex-col text-white justify-center items-center p-5">
                <h1 className="logo-font text-5xl  sm:text-6xl mb-5 mt-28">
                    <a href="/">SoundStats<i className="logo-sub text-lg">beta</i></a>
                </h1>

                <div className="glass-container flex flex-col justify-center items-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] px-5 py-[3rem]">
                    
                    <div className="flex pb-5 px-5 home-desc text-center">
                        <p>Check your top <strong><i>tracks</i></strong>, <strong><i>artists</i></strong> and <strong><i>genres</i></strong> from <strong>Spotify</strong>.</p>
                    </div>
                    
                    <div className="flex flex-row">                        
                        <button 
                            className="px-4 py-2 w-full font-semibold bg-[#1D8954] hover:bg-[#30bc78] text-white rounded-full"
                            onClick={loginSpotify}
                        >
                            <div className="flex flex-row space-x-3 items-center justify-center">
                                <img className="w-7" src={spotifyLogo} />
                                <span>Log in with Spotify</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
