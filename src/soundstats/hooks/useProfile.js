import { useEffect, useState } from "react";

export const useProfile = () => {

    const [ userProfile, setUserProfile ] = useState();

    const getUserProfile = async() => {
        const token = JSON.parse(localStorage.getItem('access_token'));
        let accessToken = token.access_token;

        const response = await fetch(`https://api.spotify.com/v1/me`, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });

        const data = await response.json();
        return data;
    }

    useEffect(() => {
        getUserProfile().then( profile => {
            setUserProfile(profile);
        });
    }, []);

    return userProfile;
}