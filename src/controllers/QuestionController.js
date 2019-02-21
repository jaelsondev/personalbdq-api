const Question = require('../models/Question')

module.exports = {
    async index(req, res){
        try{
            const questions = await Question.find({}).populate('user')
            return res.json(questions)
        }
        catch(err){
            return res.json(err)
        }
    },
    async store(req, res){
        try{
            const question = await Question.create(req.body)
            return res.json(question)
        }
        catch(err){
            return res.json(err)
        }
    },
    async update(req, res){
        try{
            const question = await Question.findOneAndUpdate({_id: req.params.id}, { $set : req.body }, {new: true})
            return res.json(question)
        }
        catch(err){
            return res.json(err)
        }
    },
    async delete(req, res){
        try{
            await Question.deleteOne({_id: req.params.id})
            return res.json({msg: 'Avaliação deletada com sucesso!'})
        }
        catch(err){
            return res.json(err)
        }
        
    }
}