# Project Name

Description of the project goes here.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [Postman Documentation](#postman-documentation)
    - [Expand for Postman Documentation](#expand-for-postman-documentation)
  - [Routes](#routes)
    - [Users](#users)
    - [Games](#games)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Ajxd9/NodeJs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd NodeJs
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the .env file and fill in the necessary environment variables.
5. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   npm run dev
   ```

## Usage

Once the application is running, you can perform the following actions:

- **Registering a new user**: Send a POST request to `/users` with the required user information.
- **Logging in**: Send a POST request to `/users/login` with your credentials to obtain an authentication token.
- **Getting all users**: Send a GET request to `/users` with appropriate authorization (admin privilege required).
- **Getting a specific user**: Send a GET request to `/users/:id` where `:id` is the user's ID.
- **Editing a user**: Send a PUT request to `/users/:id` with the updated user information.
- **Changing a user's business status**: Send a PATCH request to `/users/:id` with the updated business status.
- **Deleting a user**: Send a DELETE request to `/users/:id` to delete the user.

For game-related actions:

- **Getting all games**: Send a GET request to `/games` to retrieve all games.
- **Getting a user's games**: Send a GET request to `/games/my-games` to retrieve games associated with the authenticated user.
- **Getting a specific game**: Send a GET request to `/games/:id` where `:id` is the game's ID.
- **Creating a new game**: Send a POST request to `/games` with the necessary information to create a new game.
- **Editing a game**: Send a PUT request to `/games/:id` with the updated game information.
- **Liking a game**: Send a PATCH request to `/games/:id` to like a game.
- **Deleting a game**: Send a DELETE request to `/games/:id` to delete the game.

## API Documentation

### Postman Documentation

<details>
<summary>Expand for Postman Documentation</summary>

Add links to Postman documentation here.

</details>

## Routes

<details>
<summary>Expand for Routes</summary>

### Users

| No. | URL          | Method | Authorization            | Action                        | Notice       | Return            |
| --- | ------------ | ------ | ------------------------ | ----------------------------- | ------------ | ----------------- |
| 1   | /users       | POST   | all                      | Register user                 | Unique Email | Attachment 1      |
| 2   | /users/login | POST   | all                      | Login                         |              | Encrypt Token     |
| 3   | /users       | GET    | admin                    | Get all users                 |              | Array of users    |
| 4   | /users/:id   | GET    | Registered user or admin | Get user                      |              | User data         |
| 5   | /users/:id   | PUT    | Registered user          | Edit user                     |              | Updated user data |
| 6   | /users/:id   | PATCH  | Registered user or admin | Change user's business status |              | Updated user data |
| 7   | /users/:id   | DELETE | Registered user or admin | Delete user                   |              |                   |

### Games

| No. | URL                    | Method | Authorization         | Action             | Return                |
| --- | ---------------------- | ------ | --------------------- | ------------------ | --------------------- |
| 1   | /games                 | GET    | all                   | All games          | Attachment 2          |
| 2   | /games/my-games        | GET    | registered user       | User's games       | Array of user's games |
| 3   | /games/:id             | GET    | all                   | Get game           | Game                  |
| 4   | /games                 | POST   | Streamer user         | Create new game    | Game                  |
| 5   | /games/:id             | PUT    | Creator user          | Edit game          | Updated game          |
| 6   | /games/:id             | PATCH  | Registered user       | Like game          | Updated game          |
| 7   | /games/:id             | DELETE | Creator user or admin | Delete game        | Deleted game          |
| 8   | /serial-number/:gameId | PATCH  | Admin                 | Edit Serial Number | Updated game          |

</details>

## License

[License Name]
Copyright Abed Jbareen
