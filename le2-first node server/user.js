const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);  
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Rohan First Page</title></head>');

        res.write('<body><h1> Enter your details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Username"><br><br>');
        res.write('<input type="email" name="email" placeholder="Email"><br><br>');
        res.write('<label for ="gender">Gender:</label><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="female">Female</label');
        res.write('<label for="female"><input type="radio" id="female" name="gender" value="female"><br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
``
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST') {
        fs.writeFileSync('userDetails.txt', 'rohan shrestha');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<html>');
        // res.write('<body><h1> Checking out</h1></body>');
        // res.write('</html>');
        // return res.end();
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
