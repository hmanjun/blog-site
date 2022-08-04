const router = require('express').Router()
const {Post} = require('../../models')

router.post('/', async (req,res) => {
    try {
        const postData = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        })
        
        res.status(200).json(postData)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/:id', async (req,res) => {
    try {
        const postData = await Post.update(req.body,{
            where: {id: req.params.id}
        })

        if(!postData){
            res.status(400).json({message: `Could not find post with that id`})
            return
        }
        res.status(200).json(postData)
    } catch (error) {
        res.status(400).json(err)
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const postData = await Post.destroy({
            where: {id: res.body.params}
        })

        if(!postData){
            res.status(400).json({message: `Could not find post with that id`})
            return
        }

        res.status(200).json(postData)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router