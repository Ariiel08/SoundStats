import { generateCodeChallenge, generateRandomString } from "./authCode";
import { spotifyAppCreds } from "./spotifyAppCreds";

export const loginSpotify = () => {
    
    const { clientId, redirectUri } = spotifyAppCreds;

    let codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then(codeChallenge => {
        let state = generateRandomString(16);
        let scope = 'user-read-email user-top-read';

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