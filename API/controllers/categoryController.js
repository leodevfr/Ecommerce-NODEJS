const Category = require('../models/categoryModel')

module.exports = {
    get: async (req, res) =>{
        //rechercher les elements de la BDD
        const categories = await Category.findAll({raw: true});
        console.log(categories);
        res.render('category_list', {categories})
    },
    post: async (req, res)=>{
        await Category.create({ name: req.body.category });
        res.redirect('/category-list')
    },
    getUpdate: async(req, res)=>{
        const categorie = await Category.findByPk(req.query.id, {raw: true})
        res.render('form_category', {categorie})
    },
    update: async (req, res) =>{
        await Category.update({name: req.body.categorie},{
            where: {
                id: req.params.id
            }
        })
        res.redirect('/category-list')
    },
        
    delete: async (req, res)=>{
        await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/category-list')
    },
    
};