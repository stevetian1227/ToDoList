const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

// this line of code set the address of where the users will access the resources.
app.use(express.static('public'));

var taskList = ["Task1","Task2","Task3"];
var workList = [];


app.get('/', (req, res) =>{
    var today = new Date();
    var options = {
        weekday:"long",
        day: "numeric",
        month: "long",
    };

    var day = today.toLocaleDateString("en-US",options);

    
    // use render to send the variable to the front-end.
    // in render the first para is the ejs filename the second is a dictionary which key is the varaiblename in the ejs file and the second is the one from the server side.
    res.render('list',{dayType: day, taskList:taskList});
});



app.post('/', (req, res) =>{
    if(req.body.list===" "){
        req.body.newTask;

    }


    res.redirect("/");
})


app.listen(3000,() => {
    console.log("Server listening on port 3000");
});

