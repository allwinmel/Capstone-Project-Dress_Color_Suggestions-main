// server.js
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

app.use(cors());

const connectDb = async() => {
  const connect = await mongoose.connect("mongodb+srv://allyhcker99:allwin123@cluster0.bmy2u27.mongodb.net/Colors", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
  if(connect){
    console.log('connected to db');
  }
  return;
  
};

connectDb();

const colorSchema = new mongoose.Schema({
  data:{
    type:String,
    required:true
  }
})


const Color = new mongoose.model('Color',colorSchema);

const getColors = async() => {
  try{
    const colors = await Color.find();
    console.log(colors);
    return colors; 
  }catch(error){
    console.log(error);
  }
  
}

app.get('/getSuggestion', async(req, res) => {
  // const colors = await getColors();
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  res.json({ color: randomColor });
  // res.json(colors);
});
app.post("/post", (req, res) => { 
  console.log("Connected to React"); 
  res.redirect("/"); 
}); 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
