// root file

const express = require('express');
const app = express();
const port = 3500;
const cors = require('cors');

let userdata = [];

app.use(express.json()); //middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello this is backend');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    userdata.push(req.body);
    console.log(userdata);
    res.status(200).json({message: "data saved successfully!"});
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
