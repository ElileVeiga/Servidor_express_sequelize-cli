const TicketsInsert = require('../models/TicketsInsert');

module.exports= {
    async index( req,res ) {
        const tickets_inserts = await TicketsInsert.findAll();
                                                                                                                                                
        return res.json(tickets_inserts);
    },

    async store(req,res) {
        const { id, name_tiket, category, priority, area_tycket, image_tycket } = req.body;

        const tickets_inserts = await TicketsInsert.create({ id, name_tiket, category, priority, area_tycket, image_tycket  });
        return res.json(tickets_inserts);
    },

    async indexID(req,res) {
        const {id} = req.params
        const tickets_inserts = await TicketsInsert.findByPk(id);
        const tickets_inserts_all = await {
            id:tickets_inserts, 
            name_tiket, 
            category, priority, 
            area_tycket, 
            image_tycket
        }
                                                                                                                                      
        return res.json(tickets_inserts_all);
    },

}