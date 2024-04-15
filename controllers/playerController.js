const express = require("express");
const players = express.Router();
const { getAllPlayers, getPlayer, getPlayerByName } = require("../queries/players");


// INDEX
players.get('/', async (req, res) => {
  const {first_name, last_name} = req.query
  if(first_name && last_name){
    try {
      const player = await getPlayerByName(first_name,last_name)
      if(player){
        res.status(200).json(player)
      }else{
        res.status(404).json({ error: "Player not found"})
      }   
    } catch (error) { 
      res.status(500).json({ error: "Server Error"})
    }
  }else{
    try {
      const allPlayers = await getAllPlayers();
      res.status(200).json(allPlayers);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
});


// SHOW
players.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const player = await getPlayer(id);
    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ error: 'Player not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});




module.exports = players;