import { Route, BrowserRouter, Routes } from "react-router";
import Login from "../pages/login";
import Register from "../pages/register";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}