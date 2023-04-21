# Friends-with-API-tions

![License](https://img.shields.io/badge/license-MIT-blue)

## Description

Friends-with-API-tions is a social network web application where users can create and share their thoughts. Users can also react to friends thoughts and have their thoughts reacted upon. Finally, users can create their own friends list and add or delete friends as they see fit.

---

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Licenses](#licenses)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

---

## Technologies

---

- JavaScript
- MongoDB
- Express.js
- dayjs
- Mongoose
- Node.js
- Insomnia

## Installation

1. **Copy Link:** Within this repository, hit the "Code" button to copy the link.
1. **Clone Code:** Using your terminal or Gitbash, type the following:  "git clone *paste copied URL here*"
1. **Run NPM Install:** Being in the correct directory of your project, open your integrated terminal and use the command run "*npm i*" to install all dependencies.
1. **Start the Server:** After the dependencies instal, simply type "*npm start*" and your server will be up and running.
1. **Insomnia:** Navigate to the Insomnia Core and access the project using the base address `http://localhost:3001` in addition to the routes outline in the `TEST` section.

---

## Usage

Once the Installation instructions are complete, [CLICK HERE](TODO) to follow my demonstration on how to use `Friends-with-API-tions`

---

## Licenses

      This project is covered under the MIT license. To learn more about what this means, click the license button at the top.

---

## Contributing

At this time I am not looking for contributions to this project

## Tests

Insomnia is used to test the REST API calls.

On Insomnia, the following API routes have been created and used to add, update, or remove users, friends, thoughts, and reactions in the user's database.

📁 **USER**

- Create a new user: `POST /api/users`
- Get all users: `GET /api/users`
- Get a single user by its `id`: `GET /api/users/:userId`

- Update a user by its `id`: `PUT /api/users/:userId`

- Delete a user by its `id`: `DELETE /api/user/:userId`

📁 **FRIEND**

- Add a new friend to a user's friend list: `POST /api/users/:userid/friends/:friendId`
- Delete a friend from a user's friend list: `DELETE /api/users/:userid/friends/:friendId`

📁 **THOUGHT**

- Create a new thought: `POST /api/thoughts/`
- Get all thoughts: `GET /api/thoughts/`
- Get a single thought by its `id`: `GET /api/thoughts/:thoughtId`
- Update a thought by its `id`: `PUT /api/thoughts/:thoughtId`
- Delete a thought by its `id`: `DELETE /api/thoughts/:thoughtId`

📁 **REACTION**

- Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
- Delete a reaction by the `reactionId`: `DEL /api/thoughts/:thoughtId/reactions/:reactionId`

---

## Questions

Have questions about this project? Please reach out to me.

| GitHub Username             | Email              |
| --------------------------- | ------------------ |
| https://github.com/TyGosley | tygosley@gmail.com |

## Credits

---

[MongoDB](https://www.mongodb.com/docs/manual/)

[Mongoose](https://mongoosejs.com/docs/index.html)

[Node.JS](https://nodejs.org/en/docs)

[Express.JS](https://expressjs.com/en/guide/routing.html#express-router)

[Insomnia](https://docs.insomnia.rest/insomnia/get-started)

[Day.JS](https://day.js.org/docs/en/display/format)

[Codecademy](https://www.codecademy.com/learn)

[Khan Academy](https://www.khanacademy.org/)

[MDN Docs](https://developer.mozilla.org/en-US/)

[W3Schools](https://www.w3schools.com/js/default.asp)

[JavaScript.info](https://javascript.info/)

[CodeHS](https://codehs.com/)