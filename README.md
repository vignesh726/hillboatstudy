# Hillboat Study

## Features
- JWT Authentication
- Role-Based Access Control (Admin, User, Moderator)
- MongoDB with Mongoose
- Swagger/OpenAPI Documentation

## Setup
1. Install dependencies: `npm install`
2. Start MongoDB locally or update MONGODB_URI in .env
3. Run: `npm run dev`
4. Access Swagger UI: http://localhost:3000/api-docs

## Test Credentials
Create users via `/api/auth/register` endpoint

## API Endpoints
- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- GET `/api/users` - Get all users (Admin only)
- GET `/api/users/profile` - Get current user profile
- DELETE `/api/users/:id` - Delete user (Admin only)