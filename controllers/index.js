const router = require('express').Router()

const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api')
const dashboardRoutes = require('./dashboardRoutes')
const postRoutes = require('./postRoutes')

router.use('/', homeRoutes)
router.use('/api', apiRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/post', postRoutes)

module.exports = router