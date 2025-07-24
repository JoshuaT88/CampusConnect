# Campus IT Helpdesk Frontend

This is the frontend application for the Campus IT Helpdesk project, designed to facilitate IT support ticket management for Lincoln Memorial University (LMU) and other institutions.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/campus-it-helpdesk.git
   ```

2. Navigate to the frontend directory:
   ```
   cd campus-it-helpdesk/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build, run:
```
npm run build
```

The production files will be generated in the `dist` directory.

## Folder Structure

- `src/`: Contains the source code for the frontend application.
  - `components/`: Reusable components for the application.
  - `pages/`: Page components representing different views.
  - `hooks/`: Custom hooks for managing state and logic.
  - `services/`: API client and authentication service.
  - `App.tsx`: Main application component.
  - `main.tsx`: Entry point for the application.

## API Integration

The frontend communicates with the backend API for ticket management, user authentication, and department information. Ensure the backend is running and accessible.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.