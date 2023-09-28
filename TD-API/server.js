import express from "express";

import baskets from './router.js';

const app = express();

const PORT = process.env.PORT || 8100;

app.use(express.json())

app.use("/api/basket", baskets);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})