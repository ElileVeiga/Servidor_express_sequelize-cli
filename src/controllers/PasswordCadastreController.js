const PasswordCadastre = require('../models/PasswordCadastre');

module.exports= {
    async index( req,res ) {
        const password_cadastre = await PasswordCadastre.findAll();
                                                                                                                                                
        return res.json(password_cadastre);
    },

    async store(req,res) {
        const { user, password, ambient } = req.body;

        const password_cadastre = await PasswordCadastre.create({ user, password, ambient });
        return res.json(password_cadastre);
    },
}