const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000

var api_key = 'faf310c3dcd67cfa894bbdab0923156e-28e9457d-791b590f';
var domain = 'sandboxc335665d8de643d5a163d08485371d2d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', (req,res)=>{
  var data = {
    from: 'Oscar Stones <OscarStones2427@gmail.com>',
    to: req.body.email,
    subject: 'Hello world',
    text: 'Testing some Mailgun awesomeness!'
  };
 
  mailgun.messages().send(data, function (error, body) {
    if (error){
      console.log(error)
    }
    console.log(body);
  });
})

app.listen(port, function (request, response){
  console.log(`Example app listening on port ${port}`)
})




