const express = require("express");
const app = express();
const scrapeBooks = require('./scrapeBooks');

app.get("/", (request, response) => {
    scrapeBooks('code')
        .then(result => {
            console.log ('then', result);
            response.send("<h2>Привет Express! title="+ result.title +"___price="+ result.price +"</h2>");
            // response.status(200);
            // response.json(results);
        })
        .catch( (error) => {
            console.log ('catch', error);
            response.send("<h2>Error</h2>");
            // response.status(404).json({ error: 'No reviews' });
        })
});

app.listen(3000);
