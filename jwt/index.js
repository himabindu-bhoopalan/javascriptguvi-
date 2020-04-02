const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoClient = require('mongodb')
const url = 'mongodb://localhost:27017';
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');



app.use(cors())
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: true }));


function authenticate(req, res, next) {
    console.log("Hello");   
    console.log("Header Value:"+req.header('Authorization'));
    // var token = req.header('Authorization');
    // console.log("token value inside authenticate:"+token);
    // if (token == undefined) {
    //     res.status('401').json({
    //         message: "unauthorized"
    //     });
    // } else {

    //     jwt.verify(token, 'hdkqejkjfdhkwejfhdh', function (err, decode) {
    //         if (decode !== undefined) {
    //             console.log("decode value inside authenticate:"+decode);
    //             req.userId = decode.id;
    //             next();
    //         }
    //         else {
    //             res.status(401).json({
    //                 message: "unauthorized"
    //             });
    //         }
    //     })

    

    // }
}

app.post('/signup', function (req, res) {
    mongoClient.connect(url,{ useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("demoDb")

        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) throw err;
            var newData = {
                email: req.body.email
            }
            console.log(salt)
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                if (err) throw err;
                console.log(hash)
                newData.password = hash;
                var userData = db.collection("user").insertOne(newData, function (err, data) {
                    if (err) throw err;
                    client.close();
                    res.json({
                        message: "user Inserted"
                    })
                })

            })
        })


        //$2b$10$0I.eML4VI9OF5HtMZwSkBO






    })

});

app.post('/login', function (req, res) {
    mongoClient.connect(url,{ useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("demoDb");
        db.collection('user').findOne({ email: req.body.email }, function (err, userData) {
            if (err) throw err;
            //console.log(userData)
            bcrypt.compare(req.body.password, userData.password, function (err, result) {
                if (err) throw err;
                console.log("the reult of comparison in post: "+result);
                if (result) {
                    var jwtToken = jwt.sign({ id: userData._id }, 'hdkqejkjfdhkwejfhdh')
                    console.log("jwt token value in post: "+jwtToken);
                    res.json({
                        message: "User present!",
                        token: jwtToken  //here we have  provided the token to the browser
                    })
                }
            })
        })
    })
})

app.get("/dashboard",authenticate,function (req, res) {
    res.json({
        message: "protected"
    });
})

app.listen(3040, function () {
    console.log('port is running on 3040')
});
