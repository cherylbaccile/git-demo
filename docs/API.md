# API Documentation

## Base URL

http://localhost:3000

## Endpoints

### GET /
Returns welcome message and API information.

**Response:**
```json
{
  "message": "Welcome to Demo Project API",
  "version": "1.0.0",
  "status": "running"
}

###GET /api/users
Returns list of all users.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]

###GET /api/health
Returns health status of the API.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
