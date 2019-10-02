const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
    console.log("Listening to Port" + port);
});

app.get('/ping', (req, res) => {
    res.send("Hello World");
})
