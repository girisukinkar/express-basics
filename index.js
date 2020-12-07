const Express = require('express');
const products = require('./products');
const app = Express();
const port = 4000;

//Now these are built in express features
app.use(Express.json());  // We write it here as to use it globally
app.use(Express.urlencoded({extended:true}));


//WHAT is middleware :  a function or task to perform before the request is sent eg. authentication
function logParams(req , res, next){
    console.log(req.query);
}


// 4 Types of methods GET, PUT, POST, DELETE

/*
Express method accepts three arguments 
1. Path eg "/" Home
2. It can either be middleware, or the callback function
3. callback function
app.get('<First One is Path>', '<Middleware or Callback>')

*/

app.get("/", (req,res) => {
 
   /*The request Object has methods like
    # req.query, req.params 
    */

    /*
        res object can send response in two ways
        1. res.json  : in json format
        2. res.send : you can send HTML or anything , ensure send the header type as well
    */

res.send(products);
});

app.post("/add",logParams,(req,res) =>{
    res.send(req.body);

})


app.listen(port, () => console.log("Listening on port " + port))