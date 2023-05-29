import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, PrivPolicyPage, RedirectPage } from "../soundstats/pages";
import { StatsRoutes } from "../soundstats/routes/StatsRoutes";
import { TokenContext } from "../context";
import { refreshToken } from "../spotify-auth";


export const AppRouter = () => {
    
    const { tokenState, setToken } = useContext( TokenContext );
    const [ isTokenValid, setIsTokenValid ] = useState(true);
    const token = JSON.parse(localStorage.getItem('access_token'));

    // var hasVisited = sessionStorage.getItem('washere');

    // if ( ! hasVisited ) {

    //     // do stuff
    //     alert('Welcome, stranger !');
    //     sessionStorage.setItem('washere', true);
    // }

    useEffect(() => {
        if (token){

            const expirationTime = localStorage.getItem('expiration_time');
            const isExpired = Date.now() > Number(expirationTime);
            
            if (isExpired) {
                setIsTokenValid(false);
            }
        }
        
    }, []);

    if (!isTokenValid) {
        refreshToken(token.refresh_token)
            .then(data => {
                setToken(data)
                setIsTokenValid(true);
                location.reload();
            });
    }
    

    return (
        <>
            {getRoutes(tokenState)}
        </>
    )
}

function getRoutes(token) {

    if (!!token) return (
        <Routes>
            <Route path="/*" element={<StatsRoutes />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivPolicyPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );

    return (
        <Routes>
            <Route path="redirect" element={<RedirectPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivPolicyPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
    
  }
  
