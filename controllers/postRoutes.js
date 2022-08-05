const router = require('express').Router()
const {Post,Comment,User} = require('../models')

router.get('/:id', async (req,res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{model: User, attributes: ['username']},{model: Comment}]
        })
        if(!postData){
            res.status(400).json({message: `Could not find post with that id`})
            return
        }
        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router