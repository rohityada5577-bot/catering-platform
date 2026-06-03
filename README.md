# Catering Search Platform

full stack catering search platform built using Next.js, Node.js, and Express.js.

This project allows users to browse catering services, search caterers by name, and filter caterers based on price per plate.

The application includes a responsive frontend UI and REST APIs for managing caterer data.

---

# Features

- View all caterers
- Search caterers by name
- Filter caterers by maximum price
- Responsive modern UI
- REST API integration
- Clean card-based layout
- Backend validation for POST requests

---

# Tech Stack

## Frontend
- Next.js
- React.js
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js

## Database
- JSON File Storage / MongoDB Ready

---

# Project Structure

```bash
catering-platform/
│
├── backend/
│   ├── config/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

# Backend Setup

## 1. Navigate to backend

```bash
cd backend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start backend server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## 1. Navigate to frontend

```bash
cd frontend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Get All Caterers

```http
GET /api/caterers
```

---

## Get Single Caterer

```http
GET /api/caterers/:id
```

---

## Create Caterer

```http
POST /api/caterers
```

### Request Body

```json
{
  "name": "Royal Catering",
  "location": "Mumbai",
  "pricePerPlate": 500,
  "cuisines": ["Indian", "Chinese"],
  "rating": 4.5
}
```

---

# Search & Filter Functionality

Users can:

- Search caterers by name
- Filter caterers based on maximum price per plate

The filtering happens dynamically on the frontend.

---

# UI Highlights

- Modern responsive design
- Hero section layout
- Interactive hover effects
- Mobile responsive grid
- Premium card design

---

# Future Improvements

- Authentication
- Booking functionality
- Admin dashboard
- Image uploads
- Real MongoDB deployment
- Pagination & sorting

---

# Author

Rohit Yadav

Frontend Developer | React.js Developer

---

# Notes

This project was created as part of a developer evaluation assignment to demonstrate practical full stack development skills using Node.js and Next.js.
