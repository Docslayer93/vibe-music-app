'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const spotifyRoutes = require('./routes/spotifyRoutes');
const youtubeRoutes = require('./routes/youtubeRoutes');
const authMiddleware = require('./middleware/auth');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/spotify', spotifyRoutes);
app.use('/api/youtube', youtubeRoutes);

// Authentication middleware
app.use(authMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
