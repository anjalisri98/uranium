let addToArray= function (req, res) {
    let x= req.body.number
    console.log(x)
    let arr= [2, 5, 11, 14]
    arr.push(x)
    res.send( {  msg: "post req 3", data: arr  } )
}


let addplayer= function(req, res){
    let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
  let data= req.body;
  const obj= players.map(x => {
      if(x.name==data.name){
          res.send("player name already exists");
      }players.push(data);

  })
 
 console.log({newplayeer:req.body});
 res.send({neyplayer:data.name});



}



module.exports.addToArray= addToArray
module.exports.addplayer= addplayer