import express from 'express';
import { createTicket, getMyTickets, getTicketDetail, addComment, } from '../controllers/ticketController';
const router = express.Router();
// Route to create a new ticket
router.post('/', createTicket);
// Route to get the current user's tickets
router.get('/mine', getMyTickets);
// Route to get details of a specific ticket
router.get('/:id', getTicketDetail);
// Route to add a comment to a specific ticket
router.post('/:id/comments', addComment);
export default router;
