const db = require("../db/dbConfig");

const getAllItems = async () => {
    try {
        const allItems = await db.any("SELECT * FROM items");
        return allItems;
    } catch (error) {
        console.log(error);
    }
};

const getItem = async (id) => {
    try {
        const item = await db.one(`SELECT * FROM items WHERE id = $1`, id);
        return item;
    } catch (error) {
        console.log(error);
    }
};

const createItem = async (newItem) => {
    const { category_id, name, description, price, location, user_id } = newItem;
    try {
        const createdItem = await db.one(
            `INSERT INTO items( category_id, name, description, price, location, user_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
            [category_id, name, description, price, location, user_id]
        );
        return createdItem;
    } catch (error) {
        console.log(error);
    }
};

const updateItem = async (id, item) => {
    try {
        const { name, description, price, location } = item;
        const query = "UPDATE items SET name = $1, description = $2, price = $3, location = $4 WHERE id = $5 RETURNING *";
        const updatedItem = await db.one(query, [name, description, price, location, id]);
        return updatedItem;
    } catch (error) {
        return error;
    }
};

const deleteItem = async (id) => {
    try {
        const query = "DELETE FROM items WHERE id = $1 RETURNING *";
        const deletedItem = await db.one(query, id);
        return deletedItem;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
};