const router = require('express').Router()
const {Post,User} = require('../models')

router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll({
            include: [{model: User, attributes: ['username']}]
        })

        const posts = postData.map((post) => post.get({plain: true}))
        //res.status(200).json(posts)
        res.render('homepage', {
            posts, logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router