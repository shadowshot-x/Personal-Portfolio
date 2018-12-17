console.log("server started");
 const express=require("express");
 const bodyParser= require('body-parser');
 const app = express();
 const MongoClient = require('mongodb').MongoClient;
 app.use(bodyParser.urlencoded({extended: true}))
 app.set('view engine', 'ejs')
 app.use(express.static('public'))
 var db;

MongoClient.connect('mongodb://ujjwal:ujjwal1@ds153093.mlab.com:53093/portfolio-reviews' , (err, client) => {
  if (err) return console.log(err)
  db = client.db('portfolio-reviews') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000');
  })
})

app.post('/collection1', (req, res) => {
    console.log(req.body)
    db.collection('collection1').save(req.body, (err, result) => {
        if (err) return console.log(err)
    
        console.log('saved to database')
        res.redirect('/')
      })
  })
  app.get('/',(req,res)=>
  {
  db.collection('collection1').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {collection1: result})
  })
})
