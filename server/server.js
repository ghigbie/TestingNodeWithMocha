const express = require('express'),
          app = express();

let PORT = process.env.PORT || 8082;
let IP = process.env.IP;

app.listen(PORT, IP, () => {
   console.log(`The server is listening on port ${PORT}.`); 
});