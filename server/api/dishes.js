const router = require("express").Router();
const { Dish, Person } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#router

router.get('/', (req,res,next) => {
    Dish.findAll()
    .then(dishes => res.send(dishes))
    .catch(next)
})

//This is using async and await 
// router.get('/', async (req, res, next) => {
//     res.send(await Dish.findAll())
//     next()
// });


module.exports = router;
