const http = require('http');
const server = http.createServer((req, res) => {
 console.log(req.url, req.method);
 if(req.url === '/home'){
    res.write('<h1> This is home page</h1>');
    return res.end();
 }else if(req.url === '/men'){
    res.write('<h1> This is men page</h1>');
    return res.end();
 }else if(req.url === '/kids'){
    res.write('<h1> This is kids page</h1>');
    return res.end();
 }else if(req.url === '/cart'){
    res.write('<h1> This is cart page</h1>');
    return res.end();
 }
 res.write(`
    <html lang="en">
<head>
    <title>web</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
    </head>
    
</body>
</html>
    `);
    res.end();
});

server.listen(3001, () =>{
    console.log('Server running on address http://localhost:3001');
});