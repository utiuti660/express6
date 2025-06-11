varexpress= require('express');
 varrouter= express.Router();
 constrequest= require('request');
 router.get('/', async(req, res) =>{
 request('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', function(error, response, 
body) {
 if(!error&& response.statusCode== 200) {
 constdata= JSON.parse(body);
 res.json(data);
 }
 });
 })
 module.exports= router