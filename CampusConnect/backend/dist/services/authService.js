import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRATION = '1h';
export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: JWT_EXPIRATION,
        });
        res.json({ token, user: { email: user.email, role: user.role } });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
export const registerUser = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ Email: email, PwHash: hashedPassword, Role: 'user' });
    const token = jwt.sign({ userId: newUser.UserID }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    return { token, user: newUser };
};
export const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { Email: email } });
    if (!user)
        throw new Error('Invalid credentials');
    const isMatch = await bcrypt.compare(password, user.PwHash);
    if (!isMatch)
        throw new Error('Invalid credentials');
    const token = jwt.sign({ userId: user.UserID }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    return { token, user };
};
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token)
        return res.sendStatus(401);
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
};
