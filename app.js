const express = require("express");
const bodyParser = require('body-parser');
app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({encoded: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup.html');

});

app.post('/',(req,res)=>{
    let first=req.body.firstName;
    let last = req.body.lastName;
    let email = req.body.email;
    console.log(first,last,email);
    
})
app.listen(3000,()=>{
    console.log("server is running on 3000");
});