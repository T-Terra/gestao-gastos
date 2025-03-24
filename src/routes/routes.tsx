import { Route, BrowserRouter, Routes } from "react-router";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import NavBar from "../components/navbar/NavBar";
import Expenses from "@/pages/expenses";
import Category from "@/pages/category";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route element={<NavBar />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/expenses" element={<Expenses />} />
                    <Route path="/category" element={<Category />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}