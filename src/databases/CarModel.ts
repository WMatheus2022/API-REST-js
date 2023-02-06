import { Schema } from "mongoose";
import mongoose from "mongoose";


const CarModel = new Schema({

    marca: String,
    modelo: String,
    versao: String,
    tipocambio: String,
    quilometragem: Number,
    ano: Number,
    precovenda: Number,
}, {timestamps: true},)

export default mongoose.model('Car', CarModel)