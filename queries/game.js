const db = require('../db/dbConfig.js')

const getAllGames = async (userId) => {
    if(userId){
        try{
            const allGamesByUser = await db.any('SELECT * FROM games WHERE user_id=$1', userId)
            return allGamesByUser
        }catch(error){
            return error
        }
    }else{
        try {
          const allGames = await db.any('SELECT * FROM games')
          return allGames
        } catch (error) {
          return error
        }
    }
};

const getGame = async (id) => {
    try {
      const oneGame = await db.one('SELECT * FROM games WHERE id=$1', id)
      return oneGame
    } catch (error) {
      return error
    }
};

const createGame = async (user_id, correct_answer, score) =>{
    const query = `
        INSERT INTO games (user_id, correct_answer, score)
        VALUES ($1, $2, $3)
        RETURNING * 
        `;
        try {
            const newGame = await db.one(query, [user_id, correct_answer, score]);
            return newGame;   
        } catch (error) {
            return error
        }

}

const updateGame = async (id,game) => {
    const {score} = game
    const query = 'UPDATE games SET score=$1 WHERE id=$2 RETURNING *'
    try{
        const updatedGame = await db.one(query, [score,id])
        return updatedGame
    }catch(error){
        return error
    }
}


module.exports = { getAllGames, getGame, createGame, updateGame}