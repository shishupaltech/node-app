// console.log("shishupal");
// const a = 20;
// console.log(a/5);

const { fstat } = require("fs")

// console.log("Please Subscribe to codefriendy Programm")
// console.log(window);// this is in the browser that's why we can access the window object this we access at the window

//file based module

// const a = 500;

// console.log(a);
// module.exports = a;


//filebased module
// const a= {
//     average:(a,b)=>{
//         console.log((a+b)/2)
//     },
//     percent:(a,b)=>{
//         console.log((a/b)/100)
//     }
// }

// module.exports = a;

// building in,thirdpart

// building those are not download

// const fs = require('fs')
// if you are using readfILE THEN YOU CAN IMPORT ONLY readfilesync
// const {readFile} = require('fs');
// sync method
// const a = fs.readFileSync('node.md')
// console.log(''+a);

// sync method it will take callback function
// fs.readFile("./node.txt",'utf-8',(err,data)=>{
//     if(err){
//         throw err;
//     }
//     // 100000 async method
//         console.log(data)
    
// });

// console.log("I am first")


// const a = "THIS IS MADE BY 6PACK"
// fs.writeFile("./node1.txt",a,()=>{
//     console.log("Written");
// })

// console.log("I am first");

// const path = require('path')

// const a =path.extname('/nodejs/index.js');
// const b = path.basename("index.html")
//  c = path.dirname('./nodejs')
 
//  db = '/6bp'
// d = path.join("F:\\odejs" + db);
// console.log(d);
// console.log(c);
// console.log(a);
// console.log(b);

// talk about the os

// const os = require("os");

// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.totalmem());

// third party modules
// XPathExpression, gulp,lodash, async, socket.io,mongoose, underscore, pm2, bower,q,debug,react, mocha
// third part module is that somewrite a code or we are just use this code by download

// const pokemon = require('pokemon');
// console.log(pokemon.random());

// create server 
const fs = require("fs");
const home = fs.readFileSync("./index.html","utf-8");
console.log(__dirname);
console.log(__filename);
const PORT = 4000;
const hostname = "localhost";
const http = require("http")
//server is create 
const server = http.createServer((req,res)=>{
    // res.end("shishupal singh");
    console.log(req.url);
    if(req.url === "/"){
       return res.end(home);
    }
    if(req.url === "/about"){
       return res.end("<h1>about PAGE</h1>");
    }
    if(req.url === "/contact"){
       return res.end("<h1>contact PAGE</h1>");
    }
    if(req.url === "/Service"){
       return res.end("<h1>SERVICE PAGE</h1>");
    }else{

       return res.end("<h1>404 page not found</h1>");
    }
});

// now we have to listen
server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`)
})
