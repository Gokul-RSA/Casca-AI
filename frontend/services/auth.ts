import api from './api';

export const authService = {
    login: async (credentials: any) => {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    },

    register: async (userData: any) => {
        const response = await api.post('/auth/register', {
            email: userData.email,
            password: userData.password,
            full_name: userData.name
        });
        return response.data;
    },

    logout: async () => {
        await api.post('/auth/logout');
    },

    getCurrentUser: async () => {
        const response = await api.get('/interviews/dashboard');
        return response.data;
    }
};
