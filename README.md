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

Instructions for installing the project go here.

## Usage

Instructions for using the project go here.

## API Documentation

### Postman Documentation

<details>
<summary>Expand for Postman Documentation</summary>

Add links to Postman documentation here.

</details>

## Routes

### Users

| No. | URL          | Method | Authorization | Action             | Notice        | Return         |
| --- | ------------ | ------ | ------------- | ------------------ | ------------- | -------------- |
| 1   | /users       | POST   | all           | Register user      | Encrypt token | Array of users |
| 2   | /users/login | POST   | all           | Login              |               | Get all users  |
| 3   | /users       | GET    | admin         | Get user           | User or admin | User           |
| 4   | /users/:id   | GET    |               | Edit user          | User          |                |
| 5   | /users/:id   | PUT    |               | Change user status | User          |                |
| 6   | /users/:id   | PATCH  |               | Delete user        | User or admin |                |
| 7   | /users/:id   | DELETE |               | Delete user        | User or admin |                |

### Games

| No. | URL             | Method | Authorization | Action          | Return                |
| --- | --------------- | ------ | ------------- | --------------- | --------------------- |
| 1   | /games          | GET    | all           | All games       | Array of games        |
| 2   | /games/my-games | GET    | registered    | User's games    | Array of user's games |
| 3   | /games/:id      | GET    | all           | Get game        | Game                  |
| 4   | /games          | POST   | business user | Create new game | Game                  |
| 5   | /games/:id/like | PUT    | registered    | Like game       |                       |
| 6   | /games/:id      | PATCH  |               | Update game     |                       |
| 7   | /games/:id      | DELETE |               | Delete game     |                       |

## License

[License Name]
Copyright Abed Jbareen
