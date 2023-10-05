const User = require('../models/User');

module.exports= {
    async index( req,res ) {
        const { name, password} = req.body ;

        const users = await User.findOne({
            where:{
                name:name, 
                password:password
            }}
        );
        
        if (users) {
            users !== 'null';
            return res.json(users);
        }
        else{
            users == 'null'
            return  res.status(400).json({
                err:"erro"
            })
        };
    },

    async store(req,res) {
        const { name, email, password } = req.body;

        const user = await User.create({ name,email, password });
        return res.json(user);
    },
};