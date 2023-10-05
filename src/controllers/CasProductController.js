const CadastreProducts = require('../models/CadastreProcuct');

module.exports= {
    async index( req,res ) {
        const cadastre_products = await CadastreProducts.findAll();
                                                                                                                                                
        return res.json(cadastre_products);
    },

    async store(req,res) {
        const { name_product, type_product } = req.body;

        const cadastre_products = await CadastreProducts.create({ name_product, type_product });
        return res.json(cadastre_products);
    },

    async update(req, res){
        const { quantidade_product } = req.body;
        const cadastre_products = await CadastreProducts.update({ quantidade_product });
        return res.json(cadastre_products);
    },

    async delete(req, res) {
        const { id } = req.body
        const cadastre_products = await CadastreProducts.destroy({
            where: {
              id: id
            },
            force: true
          });
        return res.json(cadastre_products)
    }
}