# Campus IT Helpdesk

## Project Overview
The Campus IT Helpdesk is a web application designed to facilitate IT support and ticket management for Lincoln Memorial University (LMU) and can be white-labeled for other educational institutions. The application allows faculty and staff to submit support tickets, enables IT technicians to manage these tickets, and provides administrators with the ability to configure campuses and departments. The system incorporates AI-powered ticket classification and spam filtering to enhance efficiency.

## Goals
- Provide a user-friendly interface for submitting and managing IT support tickets.
- Implement AI features for ticket classification and spam detection.
- Allow for easy configuration of campuses and departments for different institutions.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, React Router 6, React Query
- **Backend**: Node 20 LTS, Express 4 (ESM + TypeScript)
- **Database**: SQL Server 2022 (for tickets, users, departments), MongoDB 7 (for chat logs), Redis 7 (for caching and session management)
- **Authentication**: JWT (access and refresh tokens), argon2 for password hashing
- **AI Integration**: OpenAI GPT-4o via REST API for ticket classification
- **Containerization**: Docker Compose for managing services
- **Documentation and CI**: Swagger UI for API documentation, GitHub Actions for CI/CD

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd campus-it-helpdesk
   ```

2. **Environment Variables**
   - Copy the `.env.example` to `.env` and configure your environment variables.

3. **Backend Setup**
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the backend server:
     ```bash
     npm start
     ```

4. **Frontend Setup**
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the frontend application:
     ```bash
     npm start
     ```

5. **Docker Setup**
   - To run the application using Docker, execute:
     ```bash
     docker-compose up
     ```

## API Endpoints
- **Authentication**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in a user.

- **Tickets**
  - `GET /api/tickets/mine`: Retrieve tickets for the logged-in user.
  - `POST /api/tickets`: Create a new ticket.
  - `GET /api/tickets/:id`: Get details of a specific ticket.
  - `POST /api/tickets/:id/comments`: Add a comment to a ticket.

- **Departments**
  - `GET /api/departments`: List all departments (admin only).

## Future Enhancements
- Implement real-time chat functionality using Socket.IO.
- Integrate email ingestion for ticket creation.
- Develop a scheduling module for room and equipment availability.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.