const mongoose = require('mongoose');
const images = require('./routes/images');
const cors = require('cors');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/imgSearchDB')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000'] 
}));

app.use(express.json());
app.use('/api/images', images);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));