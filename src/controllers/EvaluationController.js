const Evaluation = require('../models/Evaluation')

module.exports = {
    async index(req, res){
        try{
            const evaluations = await Evaluation.find({}).populate('user')
            return res.json(evaluations)
        }
        catch(err){
            return res.json(err)
        }
    },
    async store(req, res){
        try{
            const evaluation = await Evaluation.create(req.body)
            return res.json(evaluation)
        }
        catch(err){
            return res.json(err)
        }
    },
    async update(req, res){
        try{
            const evaluation = await Evaluation.findOneAndUpdate({_id: req.params.id}, { $set : req.body }, {new: true})
            return res.json(evaluation)
        }
        catch(err){
            return res.json(err)
        }
    },
    async delete(req, res){
        try{
            await Evaluation.deleteOne({_id: req.params.id})
            return res.json({msg: 'Avaliação deletada com sucesso!'})
        }
        catch(err){
            return res.json(err)
        }
        
    }
}