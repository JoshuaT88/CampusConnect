import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../services/authService';

const LoginPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const history = useHistory();

    const handleLogin = async (email: string, password: string) => {
        try {
            await login(email, password);
            history.push('/my-tickets');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;