const db = require("../db/dbConfig");

const getAllReviews = async () => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews");
    return allReviews;
  } catch (error) {
    console.log(error);
  }
};

const getReview = async (id) => {
  try {
    const review = await db.one(`SELECT * FROM reviews WHERE id = $1`, id);
    return review;
  } catch (error) {
    console.log(error);
  }
};

const createReview = async (newReview) => {
  const { name, review, prod_rating, owner_rating, transaction_id } = newReview;
  try {
    const createdReview = await db.one(
      `INSERT INTO reviews(name, review, prod_rating, owner_rating, transaction_id) VALUES($1, $2, $3, $4, $5) RETURNING *`,
      [name, review, prod_rating, owner_rating, transaction_id]
    );
    return createdReview;
  } catch (error) {
    console.log(error);
  }
};

const updateReview = async (id, review) => {
  try {
    const { name, review, prod_rating, owner_rating, transaction_id } = review;
    const query =
      "UPDATE reviews SET name = $1, review = $2, prod_rating = $3, owner_rating = $4, transaction_id = $5 WHERE id = $6 RETURNING *";
    const updatedReview = await db.one(query, [
      name,
      review,
      prod_rating,
      owner_rating,
      transaction_id,
      id,
    ]);
    return updatedReview;
  } catch (error) {
    return error;
  }
};

const deleteReview = async (id) => {
  try {
    const query = "DELETE FROM reviews WHERE id = $1 RETURNING *";
    const deletedReview = await db.one(query, id);
    return deletedReview;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
