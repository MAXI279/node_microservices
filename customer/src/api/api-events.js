const CustomerService = require("../services/customer-service")

module.exports = async (app) => {

    const customerService = new CustomerService()

    app.post('/api-events', async (req, res, next) => {

        const { payload } = req.body

        await customerService.SubscribeEvents(payload)
        return res.status(200).json(payload)

    })
}