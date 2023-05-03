
export const requestToken = (redirectUri, clientId) => {

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    let codeVerifier = localStorage.getItem('code_verifier');

    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier
    });

    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    }).then(response => {
        if (!response.ok) {
            throw new Error('HTTP status ' + response.status);
        }
        return response.json();
    }).then(data => {
        localStorage.setItem('access_token', JSON.stringify(data));
        localStorage.setItem('actual_time', Date.now().toString());
        localStorage.setItem('expiration_time', (Date.now() + (50 * 60000)).toString());

        return JSON.parse(JSON.stringify(data));

    }).catch(error => {
        throw new Error('Error:', error);
    });
}