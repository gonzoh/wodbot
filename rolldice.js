function rollDie(n)
{
 var res = [];
 for (var i=0;i<n;i++)
 {
 	var x = Math.floor(Math.random() * 10) + 1;
 	res.push(x);
 }
 return res;
}

function r(n)
{
var res = rollDie(n);
console.log(JSON.stringify(res));
}

function rw(n, dc)
{
var res = rollDie(n);
var succ = 0;
res.forEach(function(i)
{
if (i >= dc)
{
succ++;
} else if (i == 1)
{
succ--;
}
});
return JSON.stringify(res) + " : " + succ;
}

module.exports=  rw;