const express = require("express");
const users = express.Router();
const { getAllUsers, getUser, updateUser} = require("../queries/users");


// INDEX
users.get('/', async (_req, res) => {
  try {
    const allUsers = await getAllUsers();
    // console.log(allusers)
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


// SHOW
users.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'user not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

users.put('/:id', async (req,res) => {
  const {game, user} = req.body
  try {
    const updatedUser = updateUser(user,game)
    if(updatedUser){
      res.status(200).json(updatedUser)
    }else{
      res.status(404).json({error:'User Not Found'})
    }
  } catch (error) {
    res.status(500).json({error: 'Server error'})
  }

})


module.exports = users;




module.exports = users