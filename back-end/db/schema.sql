DROP DATABASE IF EXISTS eco_rent_dev;
CREATE DATABASE eco_rent_dev;

\c eco_rent_dev;

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY, 
    category_id INT,
    name TEXT,
    description TEXT,
    price INT,
    location TEXT
);

DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY, 
    item_id INT,
    owner_id INT,
    rentee_id INT
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    review TEXT,
    prod_rating INT,
    owner_rating INT,
    transaction_id INT
);




