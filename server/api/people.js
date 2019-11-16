const router = require("express").Router();
const { Person, Dish } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers

router.get('/api/people', async(req, res, next) => {
    res.send(await Person.findAll());
    next()
});

module.exports = router;
