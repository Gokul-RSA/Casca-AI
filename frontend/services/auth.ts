import api from './api';

// Mock user data for simulation
const MOCK_USER = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    token: 'mock-jwt-token'
};

export const authService = {
    login: async (credentials: any) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock successful login for any email/password
        if (credentials.email && credentials.password) {
            return {
                user: { ...MOCK_USER, email: credentials.email },
                token: 'mock-jwt-token'
            };
        }
        throw new Error('Invalid credentials');
    },

    register: async (userData: any) => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (userData.email && userData.password && userData.name) {
            return {
                user: { ...MOCK_USER, ...userData },
                token: 'mock-jwt-token'
            };
        }
        throw new Error('Registration failed');
    },

    logout: () => {
        // Handle logout
    }
};
