const express = require("express");
const games = express.Router();
const { getAllGames, getGame, createGame, updateGame } = require("../queries/game.js");


// INDEX
games.get('/', async (_req, res) => {
  try {
    const allGames = await getAllGames();
    // console.log(allames)
    res.status(200).json(allGames);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

games.get('/user', async (req,res)=>{
    const { userId } = req.query
    if(userId){
        try{
          const allGamesByUser = await getAllGames(userId)
          res.status(200).json(allGamesByUser)  
        }catch(error){
            res.status(500).json({error})
        }
    }else{
        res.status(404).json({error:"Must enter valid userId"})
    }
})


// SHOW
games.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const game = await getGame(id);
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ error: 'game not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

games.post('/', async (req,res) => {
    // console.log(req.body)
    const {user_id, score, correct_answer} = req.body
    try {
        const newGame = await createGame(user_id, correct_answer, score)
        if(newGame){
            res.status(200).json(newGame)
        }else{
            res.status(404).json({error:"Game could not be created"})
        }
        
    } catch (error) {
        res.status(500).json({error:"Server error"})
    }
})

games.put('/:id', async (req,res) =>{
    const { id } = req.params    
    try {
        const updatedGame = await updateGame(id, req.body)
        res.status(200).json(updatedGame)
    } catch (error) {
        res.status(400).json({ error })
    }
})


module.exports = games