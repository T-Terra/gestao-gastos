import { Navigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
//import { useUpdateTokens } from "@/hooks/useUpdateTokens";
import NavBar from "@/components/navbar/NavBar";

export default function ProtectedRoute() {
    const isAuthenticated = useAuth()
    
    //useUpdateTokens()
    
    if (isAuthenticated === null) {
        return <p className="text-center text-gray-700">Carregando...</p>
    }

    return isAuthenticated ? (
        <div className="w-full overflow-x-hidden">
            <NavBar />
        </div>
    ) : <Navigate to='/' replace />
}