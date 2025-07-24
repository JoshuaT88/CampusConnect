import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    UserID: {
        type: String,
        required: true,
        unique: true
    },
    TenantID: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    PwHash: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        enum: ['admin', 'tech', 'staff', 'faculty'],
        required: true
    },
    CampusID: {
        type: String,
        required: true
    },
    DeptID: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = model('User', userSchema);

export default User;