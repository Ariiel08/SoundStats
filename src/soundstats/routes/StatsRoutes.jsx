import { Navigate, Route, Routes } from "react-router-dom"
import { StatsPage } from "../pages"

export const StatsRoutes = () => {
    return (
        <Routes>
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/*" element={<Navigate to="/stats" />} />
        </Routes>
    )
}
