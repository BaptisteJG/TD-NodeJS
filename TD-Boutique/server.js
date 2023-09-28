import express from 'express';
import { env } from './config/index.js';
import mongoose from 'mongoose';

// ROUTES
import shoeRoutes from './routes/shoeRouter.js';

const app = express();

const PORT = process.env.PORT || 8000;

// DATABASE
mongoose   
    .connect(env.mongoURL)
    .then(() => console.log('Connexion à MongoDB réussi !'))
    .catch((error) => console.log(error));

// MIDDLEWARE
app.use(express.json());

//ROUTER
app.use('/api/shoe', shoeRoutes);

//SERVER
app.listen(PORT, () => {
    console.log(`Ecouter le http://localhost:${PORT}`);
});