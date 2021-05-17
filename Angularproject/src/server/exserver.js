var express = require('express');
var app = express();
var mysql = require('mysql');

var bodyParser = require('body-parser');

/*var multer  =   require('multer'); 

var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, '../assets/pic');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
}); 

var upload = multer({ storage : storage}).single('photo');*/

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());



/* Permission for CORS policy */
app.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});




var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


app.get('/', function (req, res) {
  res.write("Hi! I am Arpan");
  res.write("This is my   project");
  res.end();
  //res.send('Hello World!'); 
});

app.get('/home', function (req, res) {
  res.send('Welcome Arpan! in your home ');
});

app.get('/list', function (req, res) {


  var sql = "select * from  product";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    var jsonstr = JSON.stringify(result);
    res.end(jsonstr);
  });



  console.log("Connected!");
  //res.end("Save done!!");

});

app.post('/save', function (req, res) {

  /*upload(req,res,function(err) {  
    if(err) {  
        return res.end("Error uploading file.");  
    }  */

  console.log("test");
  var name = req.body.name;
  var adress = req.body.adress;
  var phno = req.body.phno;
  //var photo = req.file.originalname;

  console.log(req);

  var sql = "insert into  product(name,adress,phno) values ('" + name + "','" + adress + "','" + phno + "')";
  con.query(sql);
  console.log("Connected!");
  res.end('{"res":"Saved"}');

});

app.post('/submit', function (req, res) {

  console.log(req.body);
  var name = req.body.name;
  var adress = req.body.adress;
  var phno = req.body.phno;
  //var photo = req.file.originalname;*/
  if (name && phno) {
    var sql = "select id,phno from product where name ='" + name + "' and phno ='" + phno + "'";
  }
  con.query(sql, (err, result, field) => {
    if (err) {
      res.end('{"res":"Internal error occured."}')
      throw err;
    }
    console.log(result);
    if (result.length === 1) {
      var jsonstr = JSON.stringify(result);
      res.end(jsonstr);
    }
    else
      res.end('{"res":"Login Failed."}');
  });

});


var server = app.listen(3000, function () {
});


