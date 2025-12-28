const http = require('http');
// function requestListener(req,res){
//     console.log(req);
// }
// http.createServer(requestListener);

// http.createServer(function (req,res){
//     console.log(req);
// });

const server = http.createServer((req, res)=> {
    console.log(req);
});
server.listen(3001);