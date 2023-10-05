const StockProducts = require('../models/Stock_Products');

module.exports = {
    async index(req, res) {
        const cadastre_products = await StockProducts.findAll();

        return res.json(cadastre_products);
    },

    async store(req, res) {
        const { cod_product, name_product, unit_type, grup, product_location, image_product } = req.body;

        const cadastre_products = await StockProducts.create({ cod_product, name_product, unit_type, grup, product_location, image_product });
        return res.json(cadastre_products);
    },
    async update(req, res) {
        const { id } = req.params
        const {values_product} = req.body;

        const updateProducts = await StockProducts.findOne({where: {id}})
        
        if (!updateProducts) {
            res.json(
                "erro"
            )
        } else {
            const updateProducts = await StockProducts.update({values_product}, {where:{id}});
            res.json("ok")
        }
    },
    async delete(req, res) {
        const { id } = req.params
        const { cod_product, name_product, unit_type, grup, product_location, image_product } = req.body;

        const updateProducts = await StockProducts.findOne({where: {id}})
        
        if (!updateProducts) {
            res.json(
                "erro"
            )
        } else {
            const updateProducts = await StockProducts.destroy( {where:{id}}, { cod_product, name_product, unit_type, grup, product_location, image_product });
            res.json("deletado")
        }
    },
}