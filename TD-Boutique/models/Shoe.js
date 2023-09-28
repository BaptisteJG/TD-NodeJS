import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const shoeSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    picture: { type: String, required: false },
    like: { type: Number, default: 0 }
},
{
    timestamps: { createdAt: true }
})

shoeSchema.plugin(mongooseUniqueValidator);

export default mongoose.model("Shoe", shoeSchema);

// Nom (name) : Le nom de la chaussure (chaîne de caractères).
// - Prix (price) : Le prix de la chaussure (nombre).
// - Description (description) : Une description de la chaussure (chaîne de caractères).
// - Image (picture) : URL de l'image de la chaussure (chaîne de caractères).
// - Nombre de likes (like) : Le nombre de likes de la chaussure (nombre entier).