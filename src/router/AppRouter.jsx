import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, PrivPolicyPage, RedirectPage, SessionExpiredPage } from "../soundstats/pages";
import { StatsRoutes } from "../soundstats/routes/StatsRoutes";
import { useToken } from "../soundstats/hooks";


export const AppRouter = () => {

    const tokenState = useToken();

    return (
        <>
            {getRoutes(tokenState)}
        </>
    )
}

function getRoutes(token) {

    if (token) {
        
        return (

        <Routes>
            <Route path="/*" element={<StatsRoutes />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivPolicyPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )};

    return (
        <Routes>
            <Route path="redirect" element={<RedirectPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivPolicyPage />} />
            <Route path="/session-expired" element={<SessionExpiredPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
    
  }
  
