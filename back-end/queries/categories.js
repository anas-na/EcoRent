const db = require("../db/dbConfig");

const getAllCategories = async () => {
    try {
        const allCategories = await db.any("SELECT * FROM categories");
        return allCategories;
    } catch (error) {
        console.log(error)
    }
};

const getCategory = async (id) => {
    try {
        const category = await db.one(`SELECT * FROM categories WHERE id = $1`, id);
        return category;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllCategories,
    getCategory
};