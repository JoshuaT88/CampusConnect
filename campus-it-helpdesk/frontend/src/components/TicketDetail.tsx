import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTicketDetails } from '../services/apiClient';

const TicketDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [ticket, setTicket] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await getTicketDetails(id);
                setTicket(response.data);
            } catch (err) {
                setError('Failed to fetch ticket details');
            } finally {
                setLoading(false);
            }
        };

        fetchTicketDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Ticket Detail</h2>
            <h3>{ticket.subject}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <h4>Comments</h4>
            <ul>
                {ticket.comments.map((comment: any) => (
                    <li key={comment.commentID}>
                        <strong>{comment.user.email}:</strong> {comment.body}
                    </li>
                ))}
            </ul>
            <h4>Attachments</h4>
            <ul>
                {ticket.attachments.map((attachment: any) => (
                    <li key={attachment.attachID}>
                        <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                            {attachment.filePath}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketDetail;