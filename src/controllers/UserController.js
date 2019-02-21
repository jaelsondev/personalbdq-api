const User = require('../models/User')

module.exports = {
    async index(req, res){
        try{
            const users = await User.find({}).populate('course')
            return res.json(users)
        }
        catch(err){
            return res.json(err)
        }
    },
    async store(req, res){
        try{
            const user = await User.create(req.body)
            return res.json(user)
        }
        catch(err){
            return res.json(err)
        }
    },
    async update(req, res){
        try{
            const user = await User.findOneAndUpdate({_id: req.params.id}, { $set : req.body }, {new: true})
            return res.json(user)
        }
        catch(err){
            return res.json(err)
        }
    },
    async delete(req, res){
        try{
            await User.deleteOne({_id: req.params.id})
            return res.json({msg: 'Usuário deletado com sucesso!'})
        }
        catch(err){
            return res.json(err)
        }
        
    }
}