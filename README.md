# Waste Skip Booking App

This is a React + TypeScript application for booking waste skips. The app allows users to view available skip sizes, hire periods, and prices, and select the skip that best suits their needs. It is built with modern web development tools and follows best practices for performance, scalability, and maintainability.

## Features
- Fetches skip data dynamically from an API.
- Displays skip details such as size, hire period, and price.
- Responsive design with loading skeletons for a smooth user experience.
- Error handling for failed API requests.
- Built with TypeScript for type safety and better developer experience.

## How to Run the App

### Prerequisites
- Node.js (v16 or higher) and npm installed on your machine.
- A `.env` file with the following variable:
  ```
  VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api
  ```

### Steps to Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd waste-skip
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

### Build for Production
To build the app for production:
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Justification of Technologies Used

### React
- **Why React?**: React is a popular library for building user interfaces. It provides a component-based architecture, making the app modular and easy to maintain.
- **Why TypeScript?**: TypeScript adds static typing to JavaScript, reducing runtime errors and improving code quality.

### Vite
- **Why Vite?**: Vite is a fast build tool that provides instant feedback during development with its hot module replacement (HMR) feature. It is optimized for modern JavaScript frameworks like React.

### TanStack Query
- **Why TanStack Query?**: It simplifies data fetching, caching, and synchronization with the server. It also provides built-in support for loading and error states, making it ideal for handling API requests.

### Tailwind CSS
- **Why Tailwind CSS?**: Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. It ensures a consistent design system and reduces the need for writing custom CSS.

### Environment Variables
- **Why Environment Variables?**: Using environment variables (e.g., `VITE_API_BASE_URL`) keeps sensitive information like API URLs out of the source code. This improves security and makes the app easier to configure for different environments (e.g., development, staging, production).

### ESLint
- **Why ESLint?**: ESLint enforces coding standards and helps catch potential issues early in the development process. It ensures code consistency and improves maintainability.

## Folder Structure
```
waste-skip/
├── src/
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions and types
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point of the app
│   └── index.css         # Global styles
├── public/               # Static assets
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Future Improvements
- Add user authentication for personalized skip bookings.
- Implement a backend service for managing bookings.
- Add unit and integration tests for better reliability.
- Enhance accessibility for a wider audience.

## License
This project is licensed under the MIT License.