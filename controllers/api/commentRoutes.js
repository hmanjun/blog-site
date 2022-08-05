const router = require('express').Router()
const {Comment} = require('../../models')

router.post('/', async (req,res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/:id', async (req,res) => {
    try{
        const commentData = await Comment.update({
            ...req.body,
            user_id: req.session.user_id},
            {where: {id: req.params.id}}
        )

        if(!commentData){
            res.status(400).json({message: `Could not find comment with that id`})
            return
        }
        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req,res) => {
    try{
        const commentData = await Comment.destroy({
            where: {id: req.params.id}
        })

        if(!commentData){
            res.status(400).json({message: `Could not find comment with that id`})
            return
        }
        res.status(200).json(commentData)
    } catch (err) {
        res.status(400).json(err)
    }
})





module.exports = router