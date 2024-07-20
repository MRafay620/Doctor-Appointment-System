# Doctor Appointment System

Welcome to the Doctor Appointment System! This project is a comprehensive web application designed to facilitate online appointments between patients and doctors. The system is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

### User Authentication
- **Signup/Login:** Users can sign up or log in securely. Passwords are hashed, and JWT tokens are used for authentication.
- **Token Verification:** Middleware to protect routes and ensure only authenticated users can access certain endpoints.

### Dashboard
- **Patient Dashboard:**
  - View and manage personal information.
  - Book new appointments with available doctors.
  - View upcoming and past appointments.
  - Cancel or reschedule appointments.
- **Doctor Dashboard:**
  - View and manage personal information.
  - See a list of scheduled appointments.
  - Update appointment status (completed, canceled).
  - Manage available slots for patient appointments.

### Appointment Booking
- Patients can search for doctors based on specialization, availability, and location.
- The booking form allows patients to select a suitable time slot and provide additional information if needed.
- Confirmation and notification system for successful booking.

### Appointment Management
- Both patients and doctors can view and manage their appointments.
- Options to reschedule or cancel appointments.
- Appointment details include date, time, doctor's name, and consultation type (in-person or online).

### Profile Management
- Users can update their profile information such as contact details, password, and profile picture.
- Doctors can add details about their specialization, experience, and consultation fees.

### Reviews and Ratings
- Users can submit reviews and ratings for doctors after appointments.
- Reviews are stored and managed efficiently.

## Technology Stack

### Backend
- **Node.js:** JavaScript runtime for server-side logic.
- **Express.js:** Framework for building robust APIs.
- **MongoDB:** NoSQL database for storing user, doctor, booking, and review data.
- **Mongoose:** ODM for MongoDB for schema definitions and interaction.

### Frontend
- **React.js:** Library for building user interfaces.
- **React Router:** For client-side routing.
- **Axios:** For making HTTP requests to the backend APIs.
- **CSS in JS libraries:** Styled-components or Tailwind CSS for styling components.

## Installation

1. Clone the repository:
    git clone https://github.com/yourusername/doctor-appointment-system.git
2. Navigate to the project directory:
    cd doctor-appointment-system
3. Install backend dependencies:
    cd backend
    npm install
4. Install frontend dependencies:
    cd ../frontend
    npm install
5. Start the backend server:
    cd ../backend
    npm start
6. Start the frontend server:
    cd ../frontend
    npm start

## Usage

- **Signup/Login:** Register as a new user or login with existing credentials.
- **Dashboard:** Access your personalized dashboard for managing appointments and profile details.
- **Book Appointment:** Search for doctors and book appointments.
- **Manage Appointments:** View, reschedule, or cancel your appointments.
