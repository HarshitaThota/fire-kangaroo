const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

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

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));
