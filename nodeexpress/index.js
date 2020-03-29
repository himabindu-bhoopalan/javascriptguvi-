const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
var mydata=[]


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 

app.post('/users',function(req,res){
    console.log(req.body);
    //console.log(mydata);
    res.json({
        message:"Post request received"
    })
});

app.listen(3000,function(){
    console.log('port is running on 3000');
});