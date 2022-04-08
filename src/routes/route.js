const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

mov = ["rang de basanti", "the shining", "twinkle", "batman", "superman", "spiderman", "panda", "doggle", "vaspa", "stars"];
  
router.get('/movies', function(req, res){
res.send(mov);
}); 
 
router.get('/movies1/:id', function(req, res){
  for(let  i=0; i<=mov.length; i++){
    if(req.params.id>=0 && req.params.id<mov.length){
      console.log(mov[req.params.id]);
      res.send(mov[req.params.id]);
    }else{
      res.send("not valid index number");
    }
      
      
    }
  
});


  movie = [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   router.get('/films/:id1', function(req, res){
    for( let i = 0; i<=movie.length; i++){
        if(movie[i].id==req.params.id1){
        console.log(movie[i].name);
            res.send(movie[i].name);

        }
    }
});


router.get('/films1/:filmId', function(req, res){
  for(let i=0; i<=movie.length; i++){
    if(movie[i].id==req.params.filmId){
      console.log(movie[i]);
      res.send(movie[i]);
    }
    else if(req.params.filmId>movie.length){
      res.send("no such id exits");
    }
  }   

});




module.exports = router;
// adding this comment for no reason