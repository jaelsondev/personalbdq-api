const Course = require('../models/Course')

module.exports = {
    async index(req, res){
        try{
            const courses = await Course.find({})
            return res.json(courses)
        }
        catch(err){
            return res.json(err)
        }
    },
    async store(req, res){
        try{
            const course = await Course.create(req.body)
            return res.json(course)
        }
        catch(err){
            return res.json(err)
        }
    },
    async update(req, res){
        try{
            const course = await Course.findOneAndUpdate({_id: req.params.id}, { $set : req.body }, {new: true})
            return res.json(course)
        }
        catch(err){
            return res.json(err)
        }
    },
    async delete(req, res){
        try{
            await Course.deleteOne({_id: req.params.id})
            return res.json({msg: 'Curso deletado com sucesso!'})
        }
        catch(err){
            return res.json(err)
        }
        
    }
}