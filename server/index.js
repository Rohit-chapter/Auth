const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());

app.use(authRoutes);

app.listen(8000, function () {
  console.log('Server is running on port: 8000');
});