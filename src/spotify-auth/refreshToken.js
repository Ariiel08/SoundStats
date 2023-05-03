
import { spotifyAppCreds } from './spotifyAppCreds';

export const refresToken = (refreshToken) => {

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: spotifyAppCreds.clientId,
  });

  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('HTTP status ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
        localStorage.setItem('access_token', JSON.stringify(data));
        localStorage.setItem('actual_time', Date.now().toString());
        localStorage.setItem('expiration_time', (Date.now() + (50 * 60000)).toString());
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}