const express = require('express')
const { route } = require('./server')

module.exports = function(server){
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingcycles')
}