import { useEffect, useState } from "react";
import axios from "axios";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
        const ApiUrl = import.meta.env.VITE_API_URL
        
        const checkAuth = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/authcheck`, {
                  withCredentials: true
                })

                if (response.status == 204) {
                    setIsAuthenticated(true)
                } else {
                    setIsAuthenticated(false)
                }
            } catch {
                setIsAuthenticated(false)
            }
        };

        checkAuth()
    }, []);

    return isAuthenticated
}