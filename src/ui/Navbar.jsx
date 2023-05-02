import { generateCodeChallenge, generateRandomString } from "../spotify-auth/authCode";
import { requestToken } from "../spotify-auth/requestToken";

export const Navbar = () => {
    
    const clientId = '990c86cf3e4f4d2baaf045d488135aae';
    const redirectUri = 'http://localhost:5173/';

    let codeVerifier = generateRandomString(128);

    const loginSpotify = () => {
        generateCodeChallenge(codeVerifier).then(codeChallenge => {
            let state = generateRandomString(16);
            let scope = 'user-read-private user-read-email';
    
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

    async function getProfile() {
        let accessToken = localStorage.getItem('access_token');
        
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
            Authorization: 'Bearer ' + accessToken
            }
        });
        
        const data = await response.json();
        return data;
    }

   
    const getToken = async() => {
        requestToken(redirectUri, clientId);
        const res = await getProfile();
        console.log(res);
    };
    
    

    return (
        <header className="glass-nav  py-2">
            <nav className="flex w-[92%] mx-auto">
                <div className="logo-font text-white text-2xl flex sm:w-full sm:justify-center items-center sm:ml-24">
                    SoundStats
                </div>
                
                <div className="flex ml-auto">
                    <button 
                        className="nav-btn flex ml-auto items-center space-x-1 px-2 py-2 text-red-500 font-semibold rounded-lg w-[95px]"
                        onClick={loginSpotify}
                    >
                        <ion-icon size="small" name="log-out-outline"></ion-icon>
                        <div>Log out</div>
                    </button>
                </div>
            </nav>
        </header>
    )
}

