# Campus IT Helpdesk Backend

## Overview
This project is a campus IT help-desk and scheduling web application designed for Lincoln Memorial University (LMU) with the potential for white-labeling for other institutions. The application allows faculty and staff to submit IT support tickets, which can be managed by IT technicians and configured by administrators.

## Tech Stack
- **Front-end**: React 18, Vite, Tailwind CSS
- **Back-end**: Node 20 LTS, Express 4 (ESM + TypeScript)
- **Database**: SQL Server 2022 (for tickets, users, departments), MongoDB 7 (for chat logs), Redis 7 (for caching/session)
- **Authentication**: JWT (access + refresh tokens), argon2 for password hashing
- **AI Integration**: OpenAI GPT-4o for ticket classification and spam filtering
- **Containerization**: Docker Compose for managing services

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd campus-it-helpdesk/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory based on the `.env.example` provided. Ensure to set the necessary environment variables, including database connection strings and AI API keys.

4. **Database Setup**
   Run the SQL migrations to set up the database schema. Ensure that SQL Server is running and accessible.

5. **Run the Application**
   Use Docker Compose to start the application:
   ```bash
   docker-compose up
   ```

6. **Access the API**
   The backend API will be available at `http://localhost:4000`. Use tools like Postman or Swagger UI (available at `/docs`) for testing the endpoints.

## API Endpoints
- **Authentication**
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Log in an existing user

- **Tickets**
  - `GET /api/tickets/mine`: Retrieve tickets for the current user
  - `POST /api/tickets`: Create a new ticket
  - `GET /api/tickets/:id`: Get details of a specific ticket
  - `POST /api/tickets/:id/comments`: Add a comment to a ticket

- **Departments**
  - `GET /api/departments`: List all departments (admin only)

## Development
- Use TypeScript for type safety and better development experience.
- Follow best practices for code organization and structure.
- Ensure to write tests for critical functionalities.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.