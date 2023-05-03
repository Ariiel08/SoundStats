import { generateCodeChallenge, generateRandomString } from "../../spotify-auth/authCode";
import { spotifyAppCreds } from "../../spotify-auth";
import spotifyLogo from '../../assets/spotify_white.png';

export const HomePage = () => {

    const { clientId, redirectUri } = spotifyAppCreds;

    let codeVerifier = generateRandomString(128);

    const loginSpotify = () => {
        generateCodeChallenge(codeVerifier).then(codeChallenge => {
            let state = generateRandomString(16);
            let scope = 'user-read-private user-read-email user-top-read';
    
            localStorage.setItem('code_verifier', codeVerifier);
    
            let args = new URLSearchParams({
                response_type: 'code',
                client_id: clientId,
                scope: scope,
                redirect_uri: redirectUri,
                state: state,
                code_challenge_method: 'S256',
                code_challenge: codeChallenge
            });
    
            window.location = 'https://accounts.spotify.com/authorize?' + args;
        });
    }

    return (
        <>
            <div className="h-[60vh] flex flex-col text-white justify-center items-center p-5">
                <div className="logo-font text-5xl  sm:text-6xl mb-5 mt-28">
                    SoundStats<i className="logo-sub text-lg">beta</i>
                </div>

                <div className="glass-container flex flex-col justify-center items-center w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] px-5 py-20">
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
