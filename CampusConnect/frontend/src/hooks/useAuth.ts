import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
            setLoading(false);
        };

        checkUser();
    }, []);

    const login = async (email, password) => {
        const { token, user } = await authService.login(email, password);
        setUser(user);
        localStorage.setItem('token', token);
        navigate('/my-tickets');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    return {
        user,
        loading,
        login,
        logout,
    };
};

export default useAuth;