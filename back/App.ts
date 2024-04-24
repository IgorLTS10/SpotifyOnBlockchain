import express from 'express';

const app = express();
const port = 3001; // Utilisez un port différent de celui du frontend

app.get('/', (req, res) => {
  res.send('Hello Blockchain Spotify!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});