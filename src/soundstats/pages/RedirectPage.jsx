import { useNavigate } from "react-router-dom";
import { requestToken, spotifyAppCreds } from "../../spotify-auth";
import { useContext, useEffect, useRef } from "react";
import { TokenContext } from "../../context";

export const RedirectPage = () => {

    const letters = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'];
    const { setToken } = useContext( TokenContext );
    const renderAfterCalled = useRef(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('access_token');
        console.log(storedToken);

        if(!renderAfterCalled.current){

            if (!storedToken){
                const { redirectUri, clientId } = spotifyAppCreds;
                requestToken(redirectUri, clientId)
                    .then(token => {
                        setToken(token);
                    });
            }
        }

        renderAfterCalled.current = true;
    }, []);

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="waviy">
                {letters.map((letter, index) => (
                    <span
                        key={ index }
                        style={{ '--i': index + 1 }}
                        className="logo-font text-3xl"
                    >
                        { letter }
                    </span>
                ))}
            </div>
        </div>
    )
}