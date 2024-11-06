[🇬🇧 English Version](README_en.md) [🇵🇹 Portuguese Version](README_en.md)

# Node TypeScript MongoDB RESTful API

This project was created to practice and refine my skills in developing RESTful APIs using Node.js, TypeScript, and MongoDB. It is a recreation of a previous API, guided by [@felipemotarocha](https://github.com/felipemotarocha) from the [Full Stack Club](https://www.youtube.com/@dicasparadevs) in his video tutorial [here](https://www.youtube.com/watch?v=gU3kp7Aw0JI).

## Project Overview

This API demonstrates the use of modern, flexible, and widely accepted architectures and principles in the market. The design of this API includes:

- **SOLID Principles**: Ensuring modular, easy-to-understand, and maintainable code.
- **Repository Pattern**: Used to abstract the data access layer, making the code more flexible and easy to expand or modify.
- **CRUD Operations**: Implementation of basic Create, Read, Update, and Delete operations.
- **Dependency Injection**: Facilitates decoupling components, promoting more modular and testable code.

## Technologies Used

- **Node.js**: Runtime environment
- **TypeScript**: Strongly typed language for JavaScript
- **MongoDB Atlas**: Cloud version of MongoDB for easy configuration and scalability
- **Express**: Web framework for handling HTTP requests

## Initial Setup

### Prerequisites

1. **MongoDB Atlas Account**: Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and set up a cluster.
2. **Connection String**: Generate a connection string for your MongoDB Atlas cluster, which will be used to connect the API to the database. (Check the tutorial for more details.)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/brunoxfernandes/node-typescript-mongodb-restfull-api.git
   ```

2. **Install dependencies**:
   Navigate to the project folder and install dependencies:

   ```bash
   cd node-typescript-mongodb-restfull-api
   yarn install
   ```

3. **Configure environment variables**:

   - Create a `.env` file in the project root.
   - Add the MongoDB Atlas connection URI and other necessary configurations in the `.env`:

   Example of `.env` file contents:

   ```plaintext
   PORT=8000
   MONGODB_URL=mongodb+srv://clusterX.XXXXX.mongodb.net
   MONGODB_USERNAME=root
   MONGODB_PASSWORD=pass
   ```

4. **Build the project**:

   ```bash
   yarn build
   ```

5. **Start the server**:

   ```bash
   yarn start
   ```

### Available Scripts

- **`yarn start:dev`**: Starts the server in development mode with auto-reloading.
- **`yarn build`**: Compiles the TypeScript project to JavaScript in a `build` folder.
- **`yarn start`**: Starts the server using the compiled files.

## Project Structure

The project structure follows an organization based on Clean Architecture and SOLID principles:

```
src/
├── controllers/    # Controllers to handle requests and validations
├── database/       # Database configuration and connection
├── models/         # MongoDB data models
├── repositories/   # Repository Pattern implementation for data access
└── index.ts        # Main file to start the server (includes routes)
```

## Usage

This API provides basic endpoints for CRUD operations. You can interact with it using tools like Postman or any HTTP client.

### Example Endpoints

- **GET /users** - Get a list of users
- **POST /users** - Create a new user
- **PATCH /users/:id** - Update an existing user
- **DELETE /users/:id** - Delete a user

## Acknowledgments

Special thanks to [@felipemotarocha](https://github.com/felipemotarocha) for inspiration and guidance on this project. You can watch his tutorial on YouTube [here](https://www.youtube.com/watch?v=gU3kp7Aw0JI).
