import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api/auth';

export const register = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
};

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const setUser = (user: any) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};