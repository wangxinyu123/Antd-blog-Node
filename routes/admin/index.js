module.exports = app => {
    const express = require('express')
    const router = express.Router() // 子路由
    const Articles = require('../../models/Articles')
    router.post('/getAllArticles', async (req, res) => {
        console.log('request====', req.body)
        const data = await Articles.create(req.body)
        res.send(data)
    })

    app.use('/admin/api', router)
}