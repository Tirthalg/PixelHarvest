import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required : true
    },
    image_links: {
        type: [String],
        required: true
    },
    model_link: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required : true
    },
    description: {
        type: String,
        required: false
    },
    timestamp: {
        type: String,
        required: true,
        default:Date.now()
    }
})

const Items = mongoose.model("Items", itemSchema)

export default Items