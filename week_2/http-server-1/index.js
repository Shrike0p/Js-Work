//to use express we need to bring it to local machine i.e. 
//npm init -y --initializing the npm
//npm install express
//to create new router handler we use app.get and under that it uses the route address, and function which contain req which is request
//and response is the response you are giving -- app.get('/route-handler', function(req, res){})
//api means the thing is exposed that is accessed by another nodejs

const express=require("express");  //this don't come built in you have to bring from internet
const bodyParser=require("body-parser")
const app=express();

//similar to fs.readFile
const port=3000
app.get('/', function (req, res){ //so whenever i put / i will get hello world
    res.send('Hello World!')  //this callback server will run when someone hit on the backend server, we can return html <b>hi there<b>
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})
//basically listen is something which make sure that this port handles all the request
//you can skip function thing in listen



//chatgpt developer will do something 
// app.post('/backend-api/conversaations',function(req,res){
//     //run a machine learning model and response back with the conversation
//     res.send('hello world')
// })

//create http server from scratch in c 
//db call is asynchroonous so while fetching the data it work on other code
//limited ips are there, and number of machines are bigger. So a router has a public address our machine don't have a public address
//we are a part of private ip address
//aws where you deploy a code, gives you a machine and public ip
//firebase is called serverless
app.use(bodyParser.json());  //extract the json
//how do we handle post request
app.post('conversations', (req,res)=>{
    console.log(req.headers["authorization"]) //--so it show all the headers that is being used, i can do token check. 
    // it do not access req.body, so to do access we will use body parser(npm install body-parser)-- require("body-parser")
    //app.use(bodyParser.json());
    console.log(req.body);
    res.send({
        msg:"2+2=4"
    })
})

//if we try to access the harkirat.100x.dev by its original ip we are not able to access it because server see the referrer 
//because there is one load balancer and there might be a case that the server that is assigned is also assigned to someone else
//basically load balancer take care of it, so there is google who is referring to same ip. So if we directly type the ip,
//load balancer won't get from where the ip came is it for gooogle or harkirat webbsite so it throwback error

//npm install nodemon or npx nodemon filename-- it will restart the file automatically if you change something
//fetch --is a web api which fetch some data
//fetch("https//localhost:3000/", {method:"POST"}).then(func)--whenever some click you will get something 

//so simply it's just if someone hit / you will get the response as hello world.

//in a bunch of places you will see const port=process.env.PORT not 3000 it gives you environment variable 
//Environment variable---NODE
//export PORT=3005 is for starting environment variable

//const message=req.query.message -- it is basically soomething when you search chat.gpt.com/conversations?message=123
//we will get 123 


///-------------------------------Explained beautifully-------------------------------------
// const express = require("express"); // Express is a popular web framework for Node.js
// const bodyParser = require("body-parser"); // Body-parser is used to parse incoming request bodies
// const app = express(); // Create an Express application

// const port = process.env.PORT || 3000; // Use environment variables for configuration

// // Middleware to parse JSON bodies from incoming requests
// app.use(bodyParser.json());

// // Define a basic GET route for the root URL
// app.get("/", (req, res) => {
//     res.send("Hello World!"); // Respond with a simple message
// });

// // Define a POST route to handle "conversations"
// app.post("/conversations", (req, res) => {
//     // Example authorization check
//     const authHeader = req.headers["authorization"];
//     if (!authHeader || authHeader !== "Bearer mySecretToken") {
//         return res.status(401).send("Unauthorized"); // Send unauthorized status if token is missing/incorrect
//     }

//     // Log the request body
//     console.log("Request body:", req.body);

//     // Respond with a JSON object
//     res.json({ message: "This is a response to your POST request!" });
// });

// // Start the server and listen on the specified port
// app.listen(port, () => {
//     console.log(`App listening on port ${port}`);
// });

// // Useful tips and explanations:

// // - Environment Variables: Using process.env.PORT allows the app to dynamically set the port from the environment.
// //   This is useful when deploying to platforms like Heroku or AWS, where the port might be assigned by the environment.
// //   Locally, you can set an environment variable with `export PORT=3005`.

// // - Body Parsing: The `bodyParser.json()` middleware is essential for parsing JSON bodies from incoming requests. 
// //   Without this, `req.body` would be undefined or null in a POST request.

// // - Authorization: The authorization header check is a common pattern for securing endpoints.
// //   In a real-world scenario, you'd typically use a library like `jsonwebtoken` to validate JWT tokens.

// // - Load Balancers and Reverse Proxies: When deploying to production environments, your server might sit behind a load balancer or proxy.
// //   This can impact how requests are handled and sometimes requires additional configuration (e.g., handling X-Forwarded-For headers).

// // - Development Tools: Tools like `nodemon` are useful for auto-restarting the server when code changes during development.
// //   This improves development speed and efficiency.

// // - Routing: In Express, routes are defined with HTTP methods (GET, POST, PUT, DELETE, etc.) and the corresponding endpoint path.
// //   It's good practice to use RESTful conventions where possible.

// // - Error Handling: Proper error handling is crucial in production apps. Consider adding middleware to catch and handle errors.

//get uses when you want to get some info from site like if you see chatgpt on left side it shows history that is get
//asking something with chatgpt puttting that question is post 
// we can use body-parser. The body-parser module enables us to parse incoming request bodies in a middleware. 
//Express.js server needs to know what type of data you're sending over the network, so it knows how to parse it.

//fs is a library that gives u high level constructs to do filesystem stuff(read from a file, write to a file...)

//what is express
//express is a library that gives u high level constructs to create a http servers

//to start a server you need to add app.listen and assign the port 
