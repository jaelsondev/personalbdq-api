const Folder = require('../models/Folder')

module.exports = {
    async index(req, res){
        try{
            const folders = await Folder.find({}).populate('user')
            return res.json(folders)
        }
        catch(err){
            return res.json(err)
        }
    },
    async store(req, res){
        try{
            const folder = await Folder.create(req.body)
            return res.json(folder)
        }
        catch(err){
            return res.json(err)
        }
    },
    async update(req, res){
        try{
            const folder = await Folder.findOneAndUpdate({_id: req.params.id}, { $set : req.body }, {new: true})
            return res.json(folder)
        }
        catch(err){
            return res.json(err)
        }
    },
    async delete(req, res){
        try{
            await Folder.deleteOne({_id: req.params.id})
            return res.json({msg: 'Lista deletada com sucesso!'})
        }
        catch(err){
            return res.json(err)
        }
        
    }
}