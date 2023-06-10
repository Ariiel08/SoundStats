import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../context";
import { refreshToken } from "../../spotify-auth";
import { useNavigate } from "react-router-dom";


export const useToken = () => {
    const { tokenState, setToken } = useContext( TokenContext );
    const [ isTokenValid, setIsTokenValid ] = useState(true);
    const token = JSON.parse(localStorage.getItem('access_token'));
    const navigate = useNavigate();

    useEffect(() => {
        if (token){

            const expirationTime = localStorage.getItem('expiration_time');
            const isExpired = Date.now() > Number(expirationTime);
            
            if (isExpired) {
                setIsTokenValid(false);

                if (!isTokenValid) {
                    console.log(isTokenValid);
                    refreshToken(token?.refresh_token)
                        .then(data => {
                            if (data) {
                                setToken(data);
                                setIsTokenValid(true);
                                //location.reload();
                            } else {
                                setToken(data);
                                navigate('/session-expired');
                            }
                        });
                }
            }
        }
        
    }, [isTokenValid]);

    

    return tokenState;
}
