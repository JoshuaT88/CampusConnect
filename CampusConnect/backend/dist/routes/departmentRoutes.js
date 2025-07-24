import { Router } from 'express';
import { getDepartments } from '../controllers/departmentController';
const router = Router();
// Route to list all departments
router.get('/', getDepartments);
export default router;
