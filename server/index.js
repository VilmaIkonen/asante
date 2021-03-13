import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/postRoutes.js'

// app initialization:
const app = express();

// Body parser for sending the requests
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

// Express middleware to connect to app. (starting path for all the routes in posts.js). 
app.use('/posts', postRoutes);

// This should be seen when go to actual deployed version:
app.get('/', (req, res) => {
  res.send('Greetings from Hello My Friend API!')
})

// Connect server application with database (db will be hosted in MDB cloud) --> https://www.mongodb.com/cloud/atlas
dotenv.config();
const CONNECTION_URL = process.env.MONGODB_URI;

// Heroku will use env.PORT when deployed there
const PORT = process.env.PORT || 5000;

// Connection to database
mongoose.connect(CONNECTION_URL, {
    // for avoiding warnings in console  
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(error.message));

// for avoiding warnings in console  
mongoose.set('useFindAndModify', false);