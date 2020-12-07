# Middleware
Always write the middleware global usable functions at the top otherwise they won't work properly.

Writing a middleware function with only if statement kindly use the return otherwise the next code will execute and create unnecessary issuess eg

```javascript

    app.get('/',auth, (req,res) => { console.log(req.admin); })

    //Middleware function 
    function auth(req,res,next){
        if(req.query.admin === 'true'){
            req.admin = true; // we send the data in req 
            next()
        }else{
            res.send('Auth Issue');
            //The code will stop here as we are not calling the next() function 
        }
    }

    //If you only write IF statement do use return to end the function
       function auth(req,res,next){
        if(req.query.admin === 'true'){
            req.admin = true; // we send the data in req 
            next();
            return; //otherwise next code will execute and create problems
        }
            res.send('Auth Issue');
         
    }

 ```

## Use Rest Client VS code extension to test apis quickly instead of postman

    Refer http.rest file how to make get and post request

