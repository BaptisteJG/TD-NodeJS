import express, { response } from 'express';

const router = express.Router();

const data = [
    {
    "name": "Air Force 1 '07",
    "category": "f",
    "brand": "Nike",
    "price": 129.99,
    "content": "On a associé l'indémodable coloris blanc à du cuir qui change temporairement de couleur sous les rayons UV. On a aussi ajouté des empiècements en daim premium pleine fleur qui ne changent pas de couleur avec le soleil, pour jouer sur les textures, de jour comme de nuit.",
    "stock": 10,
    "online": true,
    "size": ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
    "avis": {
        "stars": 4,
        "nb": 11
    }
    },
    {
    "name": "Nike Air Max 90 Futura",
    "category": "f",
    "brand": "Nike",
    "price": 169.99,
    "content": "Chaussure pour femme",
    "stock": 7,
    "online": true,
    "avis": {
        "stars": 4,
        "nb": 267 
    },
    "size": ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
    }
]


router.get("/all", (req, res) => {
    if(data) res.status(200).json(data)
    else res.status(200).json({message: "Don't has basket"})
});

router.post("/add", (req, res) => {
    const newbasket = req.body;
    data.push(newbasket);
    res.status(200).json({
        message: 'The shoes has been add',
        data
    });
});

router.put("/update/:id", (req, res, next) => {
    const { id } = req.params;
    const { name, price} = req.body;

    try{
        if(id >= 0 && id < data.length){
            const result = data.filter((basket, i) => {
                if (i == id){
                    basket.name = name
                    basket.price = price
                }
                return basket
            })
            res.status(200).json({
                message: 'The shoes has been updated',
                data: result
            })
        }
        if(!checkParams) res.status(404).json({message: "Basket not found"})
    }
    catch(error){
        next(error)
    }
});

router.delete("/delete/:id", (req, res, next) => {
    const { id } = req.params;
    const checkParams = data.some(basket => basket.id == id);
    
    try{
        if(id >= 0 && id < data.length){
            const result = data.filter((basket, i) => i != id)
            res.status(203).json({
                message: 'The shoes has been delete',
                data: result
            })
        }
        if(!checkParams) res.status(404).json({ message: "Basket not found" })
    }
    catch(error){
        next(error)
    }
});


export default router