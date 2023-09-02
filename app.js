// express and get and post request
//Import express
const express = require('express');
//Middleware to parse request body
const bodyParser = require('body-parser')
//create a express application
const app = express();

//Middleware to parse JSON and USL-encoded request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

//Define Routes
app.get('/',(req,res)=>{
    res.send(`
    <html>
    <body>
        <h1> POST REQUEST EXAMPLE</h1>
        <form method = "POST" action="/post">
        <input type="text" name="message" placeholder="Enter the message"/>
        <button type="submit">Submit</button>
        </form>
    </body>

    </html>
    `)
})

app.post('/post',(req,res)=>{
    // Access post data from the request
    const postData = req.body;
    console.log(postData)
    res.json({
        message:"Post rquest received",
        data:[postData]

    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});

