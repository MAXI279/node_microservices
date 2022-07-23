const ShoppingService = require("../services/shopping-service")

module.exports = (app) => {

    const service = new ShoppingService()

    app.post('/api-events', (req, res, next) => {

        const { payload } = req.body

        service.SubscribeEvents(payload)

        console.log("=== Shopping service received Event ===")
        return res.status(200).json(payload)

    })
}