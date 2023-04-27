const express = require("express");
const bodyParser = require('body-parser');
const https = require('https');
app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({encoded: true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/signup.html');

});

app.post('/',(req,res)=>{
    const first=req.body.firstName;
    const last = req.body.lastName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status :"subscribed",
                merge_fields: {
                    FNAME: first,
                    LNAME: last
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/1783363d92";
    const options = {
        method: "POST",
        auth: "collins:f43b2e55caf5d4dadbef5f8379530c7a-us21"
    }
    const request = https.request(url,options,function(response){
        if (response.statusCode == 200){
            res.sendFile(__dirname+'/success.html');
        }
        else{
            res.sendFile(__dirname+'/failure.html');
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });
    request.write(jsonData);
    request.end();
    
})
app.listen(3000,()=>{
    console.log("server is running on 3000");
});


