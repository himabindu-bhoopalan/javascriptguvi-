const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoClient=require('mongodb')
const url='mongodb://localhost:27017';
const bcrypt = require('bcrypt');
const saltRounds=10
const jwt=require('jsonwebtoken');



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

function authenticate(req,res,next){
    //if token is exist
    //if token is valid
    //if token is not expired
    //then next();

    console.log(req.header('Authorization'));
    if(req.header('Authorization')==undefined){ //ikkada equal kada ravali
        res.status(401).json({
            message:"Unauthorized"
        })
    }else{
        var decode=jwt.verify(req.header('Authorization'),'hdkqejdh')
        console.log(decode);
        if(decode!==undefined){
           next(); //--executes the callback after this middleware execution

        }
        else{
            res.status(401).json({
                message:"Unauthorized"
            })

        }
    }

    
}

app.post('/signup',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db("demoDb")

        bcrypt.genSalt(saltRounds,function(err,salt){
            if(err) throw err;
            var newData={
            email:req.body.email
            }
            console.log(salt)
            bcrypt.hash(req.body.password,salt,function(err,hash){
                if(err) throw err;
                console.log(hash)
                newData.password=hash;
                var userData= db.collection("user").insertOne(newData,function(err,data){
                    if(err) throw err;
                    client.close();
                    res.json({
                        message:"user Inserted"
                    })
                })

            })
        })

        
        //$2b$10$0I.eML4VI9OF5HtMZwSkBO
         

        

        
        
    })

});

app.post('/login',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db("demoDb");
        db.collection('user').findOne({email:req.body.email},function(err,userData){
            if(err) throw err;
            //console.log(userData)
            bcrypt.compare(req.body.password,userData.password,function(err,result){
                if(err) throw err;
                console.log(result);
                if(result){
                    var jwtToken=jwt.sign({id:userData.id},'hdkqejdh')
                    console.log(jwtToken);
                    res.json({
                        message:"User present!",
                        token:jwtToken  //here we have  provided the token to the user
                    })
                }
            })
        })
    })
})

app.get("/dashboard",authenticate,function(req,res){
    res.json({
        message:"protected"
    })
})

app.listen(3040,function(){
    console.log('port is running on 3040')
});
