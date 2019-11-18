const router = require("express").Router();
const { Person, Dish } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers

//Test this with postman requests and write the unit testing 

router.get('/', (req,res,next)=>{
    Person.findAll()
    .then(people => res.send(people))
    .catch(next)
})


//Post
router.post('/' , (req,res,next) => {
    Person.create(req.body)
    .then(() => Person.findAll())
    .then(people => {
        res.send(people)
    })
    .catch((next) => {
        res.status(400).json({
            status: 'should return status code 400 if missing required information',
        });
      });
  });

  //Put 
router.put('/:id', (req,res,next)=>{
    Person.findByIdAndUpdate({id:req.params.id}, req.body)
    .then(() => Person.findAll())
    .then(people => {
        res.send(people)
    })
    .catch((next) => {
        res.status(400).json({
          status: 'should return status code 400 if missing required information',
        });
      });
  });


  //Delete 
router.delete('/:id', (req, res, next) => {
    const userID = parseInt(req.params.id);
    Person.findAll()
    .where({
      id: userID
    })
    .then((person) => {
      res.status(200).json({
        data: person
      });
    })
    .catch((next) => {
      res.status(400).json({
        status: '400 if given an invalid id',
      });
    });
});

module.exports = router;
