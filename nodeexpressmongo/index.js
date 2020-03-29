const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoClient=require('mongodb');
const url='mongodb://localhost:27017';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db("demoDb")
        var userData= db.collection("user").find().toArray()

        userData.then(function(data){
            client.close();
            res.json(data);
        }).catch(function(err){
            client.close();
            res.status(500).json({
                message:"Error"
            });
        })
    })
    
});
app.post('/users',function(req,res){
    console.log(req.body)
    //save the data in db  

    //steps to for data fetch-insert from db
    mongoClient.connect(url,function(err,client){
        //this is a err first callback-if there any err -stop further operation
        if(err) throw err;
        var db=client.db("demoDb")                              //-->choosing db
        db.collection("user").insertOne(req.body,function(err,data){  //doing operation
            if(err) throw err;                                  //error handling
                client.close();                                 //db close
                res.json({
                    message:"data inserted"
                })
                                                 
        })

    })
    
});

app.put('/users',function(req,res){
    console.log(req.params.id);
    mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db('demoDb');
        var query= {name:req.body.name}
        var newvalue={$set:req.body}
        db.collection('user').updateOne(query,newvalue,function(err,data){
            if(err) throw err;
            client.close();
            res.json({
                message:"Updated"
            })
        })    
        })
    
    });
app.delete('/users',function(req,res){
        //console.log(req.body);
        //{address:"nami"}
        mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db('demoDb');
        db.collection('user').deleteOne({name:req.body.name},function(err,data){
            if(err) throw err;
            client.close();
            res.json({
                message:"Deleted"
            })
            
        })    
        })
        
        });

app.listen(3040,function(){
    console.log('port is running on 3040')
});