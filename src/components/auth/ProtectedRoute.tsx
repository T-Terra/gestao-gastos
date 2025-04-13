import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { useUpdateTokens } from "@/hooks/useUpdateTokens";
import NavBar from "@/components/navbar/NavBar";

export default function ProtectedRoute() {
    const isAuthenticated = useAuth()
    
    useUpdateTokens()
    
    if (isAuthenticated === null) {
        return <p className="text-center text-gray-700">Carregando...</p>; // Exibe um loading enquanto verifica
    }

    return isAuthenticated ? (
        <div className="w-full overflow-x-hidden">
            <NavBar />
            <Outlet />
        </div>
    ) : <Navigate to='/' replace />
}