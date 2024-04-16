### Randle Backend

## Getting Started

- `fork` and `clone` this repository
- `npm install`  to install relevan dependencies
- `npm run db:init` to initialize database and tables
- `npm run db:seed` to insert initial data into tables
- `npm run dev` to begin running your backend server

# Relevant Endpoints

URL in each link will be a placeholder for your localhost or relevant deployed server domain

- `URL/api/games` to view all games
    - Also has a query endpoint to view games by userID `URL/api/games/user?user_id=(id)`
- `URL/api/players` to view all NBA players in data
- `URL/api/users` to view all users, displaying only id, username, and total_score

Each endpoint will have an individual id Endpoint to view a single object
