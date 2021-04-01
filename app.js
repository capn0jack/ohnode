const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Go the F away.");

});

//const port = process.env.port || 3000;
const port = 3000;
app.listen(port, () => {
    console.log("NotWazzaaaappppp");
});
