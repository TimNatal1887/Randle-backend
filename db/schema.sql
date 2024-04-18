-- db/schema.sql
DROP DATABASE IF EXISTS nba;

CREATE DATABASE nba;


\c nba


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    total_score INT
);


CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INT,
    position VARCHAR(10),
    height_feet INT,
    height_inches INT,
    current_team VARCHAR(255),
    conference VARCHAR(8),
    division VARCHAR(10),
    jersey_number INT   
);

CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    correct_answer INT REFERENCES players(id),
    guesses_allowed INT DEFAULT 6,
    user_id INT REFERENCES users(id) ON DELETE CASCADE, 
    score INT
);


