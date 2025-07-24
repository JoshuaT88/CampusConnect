import { register as registerUser, login as loginUser } from '../services/authService';
export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await registerUser(email, password);
        res.status(201).json({ token: user.token, user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        res.status(200).json({ token: user.token, user });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
};
