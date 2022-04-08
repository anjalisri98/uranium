const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();

router.get('/missing', function(req, res){
  let a =[1,2,3,4,5,7,8,9]
let sum1=0;
let sum2=0;
for (let i=0;i<a.length;i++)   //calculate sum of array
{
sum1=sum1+a[i];
}
for (let i=a[0];i<=a[(a.length)-1];i++)       //calculate value of i to find total sum
{
sum2=sum2+i;
}
let miss=sum2-sum1;
console.log(sum2-sum1);       //difference of sums to find number

return res.send({miss});
});

router.get('/missing1', function(req,res){
  let b=[33,34,35,36,37,38,39,40,42];
  let sum1=0;
  let sum2=0;
  for(let i=0; i<b.length; i+git add +){  
    sum1=sum1+b[i]; 
}
for (let i=b[0];i<=b[(b.length)-1];i++)       //calculate value of i to find total sum
{
sum2=sum2+i;
}
let miss=sum2-sum1;
console.log(sum2-sum1);       //difference of sums to find number
res.send({miss});
  
})




module.exports = router;
// adding this comment for no reason