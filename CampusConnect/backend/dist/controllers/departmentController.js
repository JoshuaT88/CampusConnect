import Department from '../models/Department';
// Get all departments
export const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving departments', error });
    }
};
// Add other department management functions as needed (e.g., create, update, delete)
