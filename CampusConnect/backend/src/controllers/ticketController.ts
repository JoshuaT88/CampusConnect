import { Request, Response } from 'express';
import Ticket from '../models/Ticket';
import TicketComment from '../models/TicketComment';
import { classifyTicket } from '../services/aiService';

// Create a new ticket
export const createTicket = async (req: Request, res: Response) => {
    try {
        const { subject, description, campusId, deptId, createdBy } = req.body;

        // AI classification
        const aiResponse = await classifyTicket(subject, description);
        const newTicket = await Ticket.create({
            subject,
            description,
            campusId,
            deptId,
            createdBy,
            status: 'Open',
            urgency: aiResponse.urgency,
            spamScore: aiResponse.spamScore,
        });

        res.status(201).json(newTicket);
    } catch (error) {
        res.status(500).json({ message: 'Error creating ticket', error });
    }
};

// Get tickets for the current user
export const getMyTickets = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const tickets = await Ticket.find({ createdBy: userId });
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tickets', error });
    }
};

// Get ticket details by ID
export const getTicketById = async (req: Request, res: Response) => {
    try {
        const ticketId = req.params.id;
        const ticket = await Ticket.findById(ticketId).populate('comments');
        if (!ticket) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving ticket', error });
    }
};

// Add a comment to a ticket
export const addComment = async (req: Request, res: Response) => {
    try {
        const ticketId = req.params.id;
        const { body } = req.body;
        const comment = await TicketComment.create({
            ticketId,
            userId: req.user.id, // Assuming user ID is stored in req.user
            body,
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error });
    }
};