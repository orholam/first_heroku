const app = require("express")();

const PORT = process.env.PORT || 3000;

let out = "<html><body><h1>Hello World!</h1><p>This is my first Heroku app</p></body></html>";

app.get("",(req, res) => {
        res.send(out);
});

app.listen(PORT, () => {
        console.log(`App up at port ${PORT}`);
});

// this is just a comment testing
