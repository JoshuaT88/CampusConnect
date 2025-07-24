import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MyTicketsPage from './pages/MyTicketsPage';
import NewTicketPage from './pages/NewTicketPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/my-tickets" element={<MyTicketsPage />} />
        <Route path="/new-ticket" element={<NewTicketPage />} />
      </Routes>
    </Router>
  );
};

export default App;