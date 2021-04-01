const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Go the F away.");

});

const port = process.env.port || 3000;
app.listen(3000, () => {
    console.log("NotWazzaaaappppp");
});
