const express = require('express'),
          app = express();

let PORT = process.env.PORT || 8082;
let IP = process.env.IP;

app.get('/', (req, res) => {
    console.log('The root route is called');
    res.status(200).send('Welcome to the root');
});

app.get('/fail', (req, res) => {
    console.log('The fail path was called');
    res.status(404).send({
       error: 'Page not found.' 
    });
});

app.get('/newTry', (req, res) => {
    console.log('The newTry path was called');
    res.status(404).send({
       error: 'Page not found',
       name: 'Some App v1.0'
    });
});

app.get('/moo', (req, res) => {
   console.log('The moo path was called');
   res.status(200).send('<h1>This is the home of the cow</h1>');
});

app.listen(PORT, IP, () => {
   console.log(`The server is listening on port ${PORT}.`); 
});

module.exports.app = app;