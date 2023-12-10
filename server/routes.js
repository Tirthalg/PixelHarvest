import express from 'express'
import Items from './models.js'

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://pixel-harvest.netlify.app/");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.post('/add_items',async(request,response )=> {
    const item = new Items(request.body)
    try {
        await item.save()
        response.send(item)
    }
    catch (error) {
        response.status(500).send(error)
        console.log(error)
    }
})

app.get('/get_items', async (request, response) => {
    const items = await Items.find({}).sort({_id:-1}).limit(10)
    try {
        response.send(items)
        console.log(items)
    }
    catch(error) {
        response.status(500).send(error)
        console.log(error)
    }
})

app.get('/get_category_items', async (req, res) => {
    console.log(req.query.category)
    let items = []
    if (req.query.category === 'All') {
        items = await Items.find({})
    }
    else {
        items = await Items.find({ category: req.query.category })
    }
    try {
        res.send(items)
        console.log(items)
    }
    catch(error) {
        res.status(500).send(error)
        console.log(error)
    }
})

export default app