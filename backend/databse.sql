CREATE DATABASE meme_database;

--\c into todo_database


CREATE TABLE meme(
    meme_id SERIAL PRIMARY KEY,
    meme_author VARCHAR(255),
    meme_caption VARCHAR(255),
    meme_url VARCHAR(255)
);


