import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, RedirectPage } from "../soundstats/pages"
import { StatsRoutes } from "../soundstats/routes/StatsRoutes";
import { TokenContext } from "../context/TokenContext";
import { refresToken } from "../spotify-auth";


export const AppRouter = () => {
    
    const { tokenState, setToken } = useContext( TokenContext );
    const [ isTokenValid, setIsTokenValid ] = useState(true);
    const token = JSON.parse(window.localStorage.getItem('access_token'));

    useEffect(() => {
        if (token){

            const expirationTime = window.localStorage.getItem('expiration_time');
            const actualTime = window.localStorage.getItem('actual_time');
            const isExpired = Date.now() > Number(expirationTime);

            console.log(isExpired);
            
            if (isExpired) {
                setIsTokenValid(false);
            }
        }
        
    }, []);

    if (!isTokenValid) {
        console.log("aaa");

        refresToken(token.refresh_token)
            .then(data => {
                setToken(data)
                setIsTokenValid(true);
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
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );

    return (
        <Routes>
            <Route path="redirect" element={<RedirectPage />} />
            <Route path="/*" element={<HomePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
    
  }
  
