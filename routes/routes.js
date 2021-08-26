const HomeRoute = require("./HomeRoute")

module.exports = function (app) {
    app.use(HomeRoute.path, HomeRoute.router)
}