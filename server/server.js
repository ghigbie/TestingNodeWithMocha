const express = require('express'),
          app = express();

let PORT = process.env.PORT || 8082;
let IP = process.env.IP;

app.get('/', (req, res) => {
    console.log('The root route is called');
    res.send('Welcome to the root');
});

app.listen(PORT, IP, () => {
   console.log(`The server is listening on port ${PORT}.`); 
});

module.exports.app = app;