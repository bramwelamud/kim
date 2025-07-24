require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
app.use(express.json());

app.use('/menu', menuRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));
