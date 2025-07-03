const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const uploadRouter = require('./upload');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRouter);

app.get('/', (req, res) => {
  res.send('API UPLOAD Cloudinary est active 🚀');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
