import express from 'express';

import {
    creatShoe,
    allShoes,
    oneShoe,
    updateShoe,
    deleteShoe,
    likeShoe,
    allShoeLike
} from '../controllers/shoeController.js';

const router = express.Router();

// Chemin
router.post("/create", creatShoe);

router.get("/all", allShoes);

router.get("/show/:id", oneShoe);

router.put("/update/:id", updateShoe);

router.delete("/delete/:id", deleteShoe);

router.put("/addlike/:id", likeShoe);

router.get("/alllike", allShoeLike);

export default router