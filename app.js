const express = require("express");
const bodyParser = require('body-parser');
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
    
})
app.listen(3000,()=>{
    console.log("server is running on 3000");
});

f43b2e55caf5d4dadbef5f8379530c7a-us21
1783363d92