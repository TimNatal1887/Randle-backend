const db = require("../db/dbConfig");
/**
 * Finds a user by their username.
 * @param {string} username - The username of the user to find.
 * @returns {Promise<object|null>} The user object if found, otherwise null.
 */
const findUserByUsername = async (username) => {
  try {
    const query = "SELECT * FROM users WHERE username = $1";

    const user = await db.oneOrNone(query, username);

    return user;
  } catch (error) {
    console.error("Error finding user by username:", error);
    throw error;
  }
};

const createUser = async ({ username, passwordHash, email }) => {
  const query = `
      INSERT INTO users (username, password_hash, email)
      VALUES ($1, $2,$3)
      RETURNING id, username, email; 
    `;
  const newUser = await db.one(query, [username, passwordHash, email]);
  return newUser;
};

const getAllUsers = async () => {
  try {
    const query = "SELECT id, username, total_score FROM USERS ORDER BY total_score DESC"
    const allUsers = await db.any(query)
    return allUsers
  } catch (error) {
    console.error("Could not find users",error)
    throw error
  }
}

const getUser = async (id) => {
  try {
    const oneUser = await db.one('SELECT id, username, total_score FROM users WHERE id=$1', id)
    return oneUser
  } catch (error) {
    return error
  }
};


const updateUser = async (user,game) =>{
  const newFinalScore = user.total_score + game.score
  try {
    const query = `UPDATE users SET username=$1, total_score=$2 WHERE id=$3 RETURNING *`;
    const updatedUser = await db.one(query,[user.username,newFinalScore, user.id] )
    return updatedUser
  } catch (error) {
    return error
  }
}

module.exports = {
  findUserByUsername,
  createUser,
  getAllUsers,
  getUser,
  updateUser
};

