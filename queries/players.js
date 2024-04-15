const db = require('../db/dbConfig.js')

const getAllPlayers = async () => {
  try {
    const allPlayers = await db.any('SELECT * FROM players')
    return allPlayers
  } catch (error) {
    return error
  }
};

const getPlayer = async (id) => {
    try {
      const onePlayer = await db.one('SELECT * FROM players WHERE id=$1', id)
      return onePlayer
    } catch (error) {
      return error
    }
};

const getPlayerByName = async (firstName,lastName) =>{
  try {
    const onePlayer = await db.one('SELECT * FROM players WHERE first_name=$1 AND last_name=$2',[firstName,lastName])
    return onePlayer
  } catch (error) {
    return error
  }
}


module.exports = { getAllPlayers, getPlayer, getPlayerByName }