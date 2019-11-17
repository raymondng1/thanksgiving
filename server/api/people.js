const router = require("express").Router();
const { Person, Dish } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers


router.get('/', (req,res,next)=>{
    Person.findAll()
    .then(people => res.send(people))
    .catch(next)
})

//----using asysnc and await in the below as an alternative

// router.get('/', async (req, res, next) => {
//     res.send(await Person.findAll())
// }) 

module.exports = router;
