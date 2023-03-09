const Product = require('../models/productModel')
const Category = require('../models/categoryModel')
const pL = true

module.exports = {
    getForm: async (req, res) =>{
        //chercher les categories => constante
        const categories = await Category.findAll({raw: true});
        //puis passer la constante dans la vue
        res.render('form_product',{categories, pL})
    },


    
    post: async(req, res) => {
        await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            categoryId: req.body.categoriesId,
            weight: req.body.weight
         });
        res.redirect('/product-create')
    },

    getList: async(req, res) => {
        const products = await Product.findAll({
            include: Category,
            raw: true,
            nest: true
        })
        res.render('products', {products, pL})
    },
}