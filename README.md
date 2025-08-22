🎯 CodeAlpha Event Registration System

A MERN stack application for managing event registrations.

📂 Project Structure
CodeAlpha_EventRegistrationSystem/
│
├── backend/    # Express.js API (Node + MongoDB)
└── frontend/   # React (Vite) UI

✅ Features

✔ View a list of events
✔ View details of a specific event
✔ Register for an event
✔ Manage (view/cancel) registrations
✔ MongoDB Atlas for storage

⚙ Setup Instructions
Backend
cd backend
npm install


Create a .env file in backend/ with:

MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000


Run the backend:

nodemon server.js

Frontend
cd frontend
npm install
npm run dev


Access UI at:
➡ http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/events	Get all events
GET	/api/events/:id	Get single event
POST	/api/registrations	Register for event
GET	/api/registrations/:userId	View user registrations
DELETE	/api/registrations/:id	Cancel registration
✅ Usage

Use Postman to test API routes

Access frontend at http://localhost:5173 for event listing and registration

🔒 Prerequisites

Node.js & npm installed

MongoDB Atlas account for database setup

🤝 Contributing

Feel free to fork and submit pull requests.
For major changes, open an issue first to discuss what you’d like to change.

📜 License

This project is for educational purposes only.
