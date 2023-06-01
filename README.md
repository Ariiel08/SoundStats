# SoundStats
A React project that uses the Spotify API to display a user's statistics and information.

## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)

## Technologies
Project is created with:
* JavaScript (ES6)
* HTML5
* CSS3
* React
* Firebase
* Vite
* TailwindCSS
* Headless UI

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm run dev
```

Then to work with Tailwind and watch changes:

```
$ npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch
```

You will need your Spotify credentials in order to use the API, find documentation [here](https://developer.spotify.com/documentation/web-api/tutorials/getting-started). 

In `spotifyAppCreds.js` change `clientId` and `redirectUri` with your creds.

Then you should add a .env file with the variables found in .env.template with your firebase configuration:

```
VITE_APIKEY=
VITE_AUTHDOMAIN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDERID=
VITE_APPID=
```


