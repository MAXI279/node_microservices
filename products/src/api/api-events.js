const ProductsService = require("../services/product-service")

module.exports = async (app) => {

    const service = new ProductsService()

    app.post('/api-events', async (req, res, next) => {

        const { payload } = req.body

        await service.SubscribeEvents(payload)
        return res.status(200).json(payload)

    })
}