var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'aws-test.cm7d5lgfchgt.us-east-1.rds.amazonaws.com',
  user     : 'awstest',
  password : 'awstest.2017',
  database : 'awstest',
  port: 3306
});
 
connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
       console.log('Conexion correcta.');
    }
 });