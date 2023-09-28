// MODEL
import Model from "../models/Shoe.js";

// PACKAGE
import { env } from "../config/index.js";

// FONCTION
// Création d'article
export const creatShoe = async (req, res, next) => {
    try{
        await Model.create({ ...req.body });
        res.status(201).json('La chaussure a été ajouté');
    }
    catch(error){
        next(error);
    }
}

// Récupération de tous les articles
export const allShoes = async (req, res, next) => {
    try{
        res.status(200).json (await Model.find() );
    }
    catch(error){
        next(error);
    }
}

// Récupération d'un article
export const oneShoe = async (req, res, next) => {
    try{
        res.status(200).json( await Model.findById(req.params.id) );
    }
    catch(error){
        next(error)
    }
} 

// Modification d'un article
export const updateShoe = async (req, res, next) => {
    const { id } = req.params;
    try{
        const shoe = await Model.findById(id);
        if(shoe) res.status(200).json( await Model.findByIdAndUpdate(id, { $set: req.body }, {new: true}) )
        if(!shoe) res.status(404).json({message: 'Ressource non trouvé'})
    }
    catch(error){
        next(error)
    }
}

// Suppression d'un article
export const deleteShoe = async (req, res, next) => {
    const { id } = req.params;
    try{
        const shoe = await Model.findById(id);
        if(shoe) {
            await Model.findByIdAndRemove(id)
            res.status(200).json({message: 'La chaussure a été supprimé'})
        }
        if(!shoe) res.status(404).json({message: 'Ressource non trouvé'})
    }
    catch(error){
        next(error)
    }
}

// Ajout de like
export const likeShoe = async (req, res, next) => {
    const { id } = req.params;
    try{
        const shoe = await Model.findById(id);
        if(shoe) {
            shoe.like = shoe.like +1;
            await shoe.save();
            res.status(200).json({
                like: shoe.like,
                message: 'Like ajouté'
            })
        }
        if(!shoe) res.status(404).json({message: 'Ressource non trouvé'})
    }
    catch(error){
        next(error)
    }
}

// Tri par like
export const allShoeLike = async (req, res, next) => {
    try{
        const shoes = await Model.find().sort({like: -1})
        res.status(200).json(shoes)
    }
    catch(error){
        next(error)
    }
}