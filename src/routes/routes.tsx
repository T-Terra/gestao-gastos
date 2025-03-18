import { Route, BrowserRouter, Routes } from "react-router";
import Login from "../pages/login";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}