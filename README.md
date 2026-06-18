# Ruturaj Vidhate - Full Stack Developer Portfolio

A modern, premium, fully responsive full-stack portfolio website built with React.js, Vite, Node.js, Express, and MongoDB.

## Tech Stack

### Frontend
- React.js + Vite
- TypeScript
- Tailwind CSS (v4)
- Framer Motion
- Lucide React
- Axios

### Backend
- Node.js + Express.js
- MongoDB Atlas
- Mongoose
- Rate Limiting, Helmet Security, CORS

## Project Structure

- `frontend/` (Root): Contains the Vite + React.js application
- `server/`: Contains the Node.js + Express.js backend application

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account (or local MongoDB)

### Environment Variables

**Backend (`server/.env`)**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

**Frontend (`.env`)**
```env
VITE_API_URL=http://localhost:5000/api
```

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd server
npm install
```

### Running Locally

1. Start the Backend Server:
```bash
cd server
npm start # or node index.js
```

2. Start the Frontend Development Server (in a new terminal):
```bash
npm run dev
```

The application will be running at `http://localhost:5173`

## Deployment

### Frontend (Vercel)
1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Configure Environment Variables in Vercel.
4. Deploy!

### Backend (Render)
1. Create a new Web Service in Render.
2. Connect the GitHub repository.
3. Set the Root Directory to `server`.
4. Build Command: `npm install`
5. Start Command: `node index.js`
6. Add Environment Variables (MONGO_URI, CLIENT_URL, etc.).
7. Deploy!
