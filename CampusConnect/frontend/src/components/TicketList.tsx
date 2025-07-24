import React from 'react';
import { useQuery } from 'react-query';
import { apiClient } from '../services/apiClient';

const TicketList = () => {
    const { data: tickets, isLoading, error } = useQuery('tickets', () =>
        apiClient.get('/api/tickets/mine')
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading tickets</div>;

    return (
        <div>
            <h2>My Tickets</h2>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Subject</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Created At</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.TicketID}>
                            <td className="border px-4 py-2">{ticket.Subject}</td>
                            <td className="border px-4 py-2">{ticket.Status}</td>
                            <td className="border px-4 py-2">{new Date(ticket.CreatedAt).toLocaleString()}</td>
                            <td className="border px-4 py-2">
                                <a href={`/tickets/${ticket.TicketID}`} className="text-blue-500 hover:underline">
                                    View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TicketList;