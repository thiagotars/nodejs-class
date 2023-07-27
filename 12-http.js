const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`
            <h1>Ooops</h1>
            <p>Seems like we did not find the page you are looking for</p>
            <a href="/">Home page</a>
        `);
  }
});

server.listen(5000);
