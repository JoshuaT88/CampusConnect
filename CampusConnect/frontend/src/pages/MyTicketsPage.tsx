import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { apiClient } from '../services/apiClient';
import TicketList from '../components/TicketList';

const MyTicketsPage = () => {
    const [tickets, setTickets] = useState([]);

    const { data, error, isLoading } = useQuery('myTickets', () =>
        apiClient.get('/api/tickets/mine')
    );

    useEffect(() => {
        if (data) {
            setTickets(data);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading tickets: {error.message}</div>;
    }

    return (
        <div>
            <h1>My Tickets</h1>
            <TicketList tickets={tickets} />
        </div>
    );
};

export default MyTicketsPage;