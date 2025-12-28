const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Rohan First Page</title></head>');

        res.write('<body><h1> Welcome to Rohan First Page</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1> Checking out</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1> bhetana sathi</h1></body>');
    res.write('</html>');
    res.end();
});
// server.listen(3001);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on  address http://localhost:${PORT}`);
});
