import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../services/apiClient';

const NewTicketPage = () => {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subject', subject);
        formData.append('description', description);
        if (file) {
            formData.append('file', file);
        }

        try {
            await apiClient.post('/api/tickets', formData);
            history.push('/my-tickets');
        } catch (error) {
            console.error('Error creating ticket:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Ticket</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="file">Upload File (optional)</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="border rounded p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit Ticket</button>
            </form>
        </div>
    );
};

export default NewTicketPage;