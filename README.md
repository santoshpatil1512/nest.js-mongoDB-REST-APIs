# NestJS CRUD API

A simple and scalable backend API built with NestJS, using MongoDB, JWT for authentication, and bcrypt for password hashing.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [License](#license)

## Features

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: NoSQL database for storing and retrieving data.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **Bcrypt**: Password hashing for secure storage of user credentials.
- **CRUD Operations**: Basic Create, Read, Update, and Delete operations for managing resources.
- **Signup & Login**: User authentication routes for signup and login.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/santoshpatil1512/nest.js-mongoDB-REST-APIs.git
    cd nest.js-mongoDB-REST-APIs
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```
    MONGO_URI=mongodb://localhost/nestjs-crud
    JWT_SECRETS=your_jwt_secret
    JWT_EXPIRES =  3d
    ```

## Running the Application

1. **Development Mode**:
    ```bash
    npm run start:dev
    ```

2. **Production Mode**:
    ```bash
    npm run build
    npm run start:prod
    ```

## Endpoints

### Auth Routes

- **Signup**: 
    - **URL**: `/auth/signup`
    - **Method**: `POST`
    - **Body**:
      ```json
      {
        "name": "example",
        "email": "example@gmail.com",
        "password": "password"
      }
      ```
- **Login**: 
    - **URL**: `/auth/login`
    - **Method**: `GET`
    - **Body**:
      ```json
      {
        "email": "example@gmail.com",
        "password": "password"
      }
      ```

### Book Routes

- **Create Book**: 
    - **URL**: `/books`
    - **Method**: `POST`
    - **Body**:
      ```json
      {
        "title": "title",
        "description": "description",
        "author": "author",
        "price": 000,
        "category": "category"
      }
      ```
- **Get All Books**: 
    - **URL**: `/books`
    - **Method**: `GET`

- **Get Book by ID**: 
    - **URL**: `/books/:id`
    - **Method**: `GET`

- **Update Book**: 
    - **URL**: `/books/:id`
    - **Method**: `PUT`
    - **Body**:
      ```json
      {
        "title": "title",
        "description": "description",
        "author": "author",
        "price": 000,
        "category": "category"
      }
      ```

- **Delete Book**: 
    - **URL**: `/books/:id`
    - **Method**: `DELETE`

## Environment Variables

Ensure you set the following environment variables in your `.env` file:

- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT.

## Testing

Run the tests using the following commands:

- **Unit Tests**:
    ```bash
    npm run test
    ```

- **Test Coverage**:
    ```bash
    npm run test:cov
    ```

- **End-to-End Tests**:
    ```bash
    npm run test:e2e
    ```

## License

This project is licensed under the UNLICENSED License.

---

Feel free to contribute to this project by opening issues or submitting pull requests.

