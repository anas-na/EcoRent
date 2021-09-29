DROP DATABASE IF EXISTS eco_rent_dev;
CREATE DATABASE eco_rent_dev;

\c eco_rent_dev;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone_number BIGINT NOT NULL,
    date_of_birth DATE NOT NULL,
    address TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE categories (
    id SERIAL PRIMARY KEY, 
    name TEXT
);


CREATE TABLE items (
    id SERIAL PRIMARY KEY, 
    category_id INT,
    name TEXT,
    description TEXT,
    price INT,
    location TEXT,
    user_id VARCHAR
);


CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    item_id INT,
    owner_id INT,
    rentee_id INT
);


CREATE TABLE reviews (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    review TEXT,
    prod_rating INT,
    owner_rating INT,
    transaction_id INT
);




