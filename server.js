const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

//database variables
const dbURI = "mongodb+srv://fire-kangaroo:Wlf5sEOec2hp6foM@recipes.5xnk3eo.mongodb.net/user-recipes?retryWrites=true&w=majority"
const mongoose = require("mongoose");
const Recipe = require("./models/recipe");

//connect to db
mongoose.connect(dbURI, {UseNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT)))  //once connected to db, start listening to port
.catch((error) => console.log(error));

const API_KEY = '+uPfKo8TXPtfhUppp3+/Fg==wUIsZ70JZH1CiaBN';
var query = 'italian wedding soup';
app.post('/requests', async (req, res) => { 
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "v1-recipe-API",
            messages: [{ role: "user", content: "recipesssss baaaaaby" }], 
            max_tokens: 1000,
        })
    };
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/recipe?query=', options);
        const data = await response.json(); 
        res.send(data);
    } catch (error) {
        console.error(error);
    }
});


//Front-end post request to here
//something like localhost:8000/test
//req holds food name data thing
//Do call to recipe API `https://api.api-ninjas.com/v1/recipe?query=${data}` data is name of food/query
//and then make another call to database to get user made recipes
app.post('/test', async (req, res) => { 
  let input = req.body.food;
  const options = {
      method: "GET",
      headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          'X-Api-Key':  `${API_KEY}`
      },
  };
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${input}`, options);
    const data = await response.json(); 
    
    //db query
    //return anything that says {input} in title or ingredients
    let dbQuery = {
      title: new RegExp(input, 'i'),
      ingredients: new RegExp(input, 'i')
    }
    
    //call to database
    
    let dbData = await Recipe.find(dbQuery)
    .catch((err) => console.log(err));
    //concatenate dbData along with API data
    const allData = data.concat(dbData);

    //send data to user
    res.json({user: allData});
    
} catch (error) {
    console.error(error);
}
});

//Add recipe to database
app.post("/add-recipe", async(req, res) =>{
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    servings: req.body.servings,
    instructions: req.body.instructions
  });

  recipe.save()
  .then((result) =>{
    res.json({res: result})
  })
  .catch((err) => console.log(err));
});


