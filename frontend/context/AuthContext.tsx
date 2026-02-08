import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { authService } from '@/services/auth';

interface User {
    id: string;
    name: string;
    email: string;
    full_name?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: any) => Promise<void>;
    signup: (userData: any) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const checkAuth = async () => {
        try {
            const userData = await authService.getCurrentUser();
            setUser(userData);
            setIsAuthenticated(true);
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async (credentials: any) => {
        try {
            await authService.login(credentials);
            await checkAuth(); // Fetch user data after successful login
            router.push('/dashboard');
        } catch (error: any) {
            // Do not log the full error to avoid Next.js error overlay confusion
            // console.error("Login failed", error);

            // Check for 401 specifically
            if (error.response && error.response.status === 401) {
                throw new Error("Invalid email or password");
            }
            throw new Error("Login failed. Please try again.");
        }
    };

    const signup = async (userData: any) => {
        try {
            await authService.register(userData);
            // After signup, we might be logged in automatically or need to login.
            // Current backend setup requires login after signup or auto-login.
            // Let's assume auto-login if the cookie is set, or redirect to login.
            // The task said "User can register successfully", usually this implies redirect to login 
            // OR auto-login. 
            // For now, let's redirect to login to be safe, or try to login immediately if backend supports it.
            // Actually, `register` in backend doesn't set cookie. So we must redirect to login.
            router.push('/login');
        } catch (error) {
            console.error("Signup failed", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            setIsAuthenticated(false);
            router.push('/');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
