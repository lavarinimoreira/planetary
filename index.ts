require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const axios = require('axios');
const apiUrl = ('https://api.nasa.gov/planetary/apod?api_key='+process.env.REACT_APP_PHOTO_API_KEY)

console.log(apiUrl);

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello API');
})

app.get('/apod', async (req, res, next) => {
  try{
    if(!process.env.REACT_APP_PHOTO_API_KEY){
      throw new Error('You forgot to set REACT_APP_PHOTO_API_KEY')
    }
    const result = await axios.get(apiUrl)
    res.json(result.data)
  } catch (err) {
    next(err);
  }
})

app.listen(8000, () => {
  console.log('started');
})