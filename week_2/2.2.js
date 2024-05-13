//Nodejs runtime |HTTP
/**
 * What is ECMASCRIPT (specifications)-- it is an specification on which javascript is based, it tells how javascript should look like, basically it
 * is a doc which says that if you create javascript do add these things(number, dates, objects), so every new year they add something
 * which is shown in js 
 * Ecmascript is an scripting language specification standardized by Ecma international. It serves as the guidelines or rules
 * for scripting language design
 * EcmaScript versions(ES5, ES6) are essentially updates to the specification, introducing new features and syntaxes. Ex->ES6
 * introduced arrow functions, classes and template literals, if a browser didn't update to es5 or more it won't support new features
 *
 * What is javascript(Implementation)
 * It is a scripting language that conforms to the ecmapscript specification. It's an used implementation of Ecmascript
 * Javascript includes additional features that are not part of ECMASCRIPT specification, like DOM which is not define by Ecmascript 
 * like settimeout is introduced by the web browser which is not specified by ecmascript. That is why it is called web apis
 * 
 * Common Js Browser engines--convert code into 01  
 * V8-Used by google chrome/chromium-C
 * SpiderMonkey-Used by Firefox-C+Rust
 * 
 * What is Nodejs 
 * It is a runtime, 
 * Some smart people took out the V8 engine Added some backend things (filesystem reads) on top to create a new runtime to compete 
 * with backend languge like Java.
 * Javascript was never meant to be run in backend, eventually became very popular and is popular choice of runtime on the backend.
 * 
 * What is Bun
 * It is a competitor of nodejs, faster than nodejs
 * Other than the fact that JS is single threaded, Nodejs is slow. Some smart people said they wanted to rewrite the js runtime for
 * the backend and introduced Bun. 
 * It is significantly faster runtime, It is written in Zig
 * 
 * What can we do with Node.js?
 * 1. Create clis--command line interface
 * 2. Create a video player
 * 3. Create a game
 * 4. Create an HTTP Server
 * 
 * Mostly for HTTP Server.
 * 
 * What is an HTTP Server?
 * Hyper Text Transfer Protocol( if we need each other there should be a handshake/communication)
 * 1. A protocol that is defined for machines to communicate
 * 2. Specifically for websites, it is the most common way of your website's frontend to talk to its backend
 * You know frontend and backend-- a place where codes run
*  ____                                          _______
 * |    |---------------------------------------|       |
 * |    |                                       |       |
 * |fr  |  communication is done through HTTP   |server |
 * |    |---------------------------------------|       |
 * |____|                                       |_______| 
 * 
 * What is an HTTP Server?
 * The machine that exposes the code, basically it check the string what you requested and validate/ authentication, and then allow 
 * you to handshake
 * 
 * Some code that follows the HTTP Protocol And is able to communicate with clients (browsers/mobile apps..)
 * Think of it to be similar to the call app in your phone, Which lets you communicate with your friends.
 * 
 * HTTP Protocol
 * In the end, its the client throwing some information at a server
 * Server doing something with that information
 * Server responding back with the final result
 * 
 * 1. Think of them as functions, where
 * 2. Arguments are something the client sends
 * 3. Rather than the function body, the server does something with the request 
 * 4. Rather than the function returning a value, the server responds with some data
 * 
 * The client needs to wory about
 *   -------------------------------HTTP CLIENT-----------------------------------------
 *   |                  |               |                       |                      |
 * Protocol         Address             Route               Headers Body            Method
 * (HTTP/HTTPS)     (URL/IP/PORTS)                          query parameter
 * 
 * Things Sever need to worry about
 *       ---------------------------HTTP SERVER SIDE-----------------------------
 *      |                                   |                                    |
 * Response Headers                 Response Body                       Status Codes
 * 
 * Communication happend like this 
 * 
 * https://chat.openai.com/backend-api/conversation
 * https://->Protocol
 * chat.openai.com->URL
 * backend-api/conversation->Route 
 * 
 * route specify what exactly you want to do
 * Header-- you send some information (cookie)
 * Body- when you send the request you send some argument that comes under body, let say you want to do 2+2
 * Method- specify which kind of request you are sending (post- some data send, get- getting the data)
 * 
 * Inside request heder there is a authorizatiion section and if you get that you can run chatgpt on that account
 * 
 * Header-12323dsdawdaawsdaasdcwadsadwadsvwcadcawv (basically it is something like key which is used tovalidate is that you)
 * Body- What is 2+2 
 * Method:Post
 * client------------------------------------------------->server
 *       <------------------------------------------------
 * Response Header------
 * Response Body- 2+2 is equal to 4
 * Status code 200 -------------a signal which tells the status of the request (server respond)
 * 
 * Why body, header status is different not pack together -- basically it is who created made like this
 * 
 * What happens or sequence of event happen when you go to browser or press enter on google(client-side)
 * These events happens
 * 1. Broswer parses the URL
 * 2. Does a DNS Lookup (converts google.com to an Ip)
 * 3. Esstablishes a connection to the IP (does handshake...)
 * 
 * What is DNS Resolution
 * URLs are just like contacts in your phone, In the end, they map to an Ip. If uyou ever buy a URL of your own, you will need to 
 * point it  to the IP of your server
 * 
 * whenever you buy a domain name you can point subdomain to various ip
 * 
 * Things happen On server side after the request is received
 * 1. You get the inputs(route, body, headers)
 * 2. You do some logic on the input, calculate the output
 * 3. You return the output body, headers and status code
 * 
 * What are the common methods you can send to your Backend server?
 * 1. GET--- Sending a request to get back the cahtgpt conversation
 * 2. Post-- Adding a converstation (there is a post handler)
 * 3. Put-- Updating my name or posting something 
 * 4. Delete-- deleting a converstation
 * 
 * What are the common status codes the backend responds with?
 * 1. 200- Everything is ok
 * 2. 404- Page/route not found
 * 3. 403- Authentication issues (try to access chatgpt 4 but i didn't bought it)
 * 4. 500- Internal server error (any type of bug / be crashes)
 */