const express = require('express');
const app = express();

const helloPath = "/hello";

const middleWareLogger = (req, res, next) => {
    console.log("Middleware, istekten önce çalıştı");
    next();
}

app.use(middleWareLogger);

app.get(helloPath,(req, res) => {
    res.json("Selam,GET isteği atıldı");
});

app.post(helloPath, (req, res) => {
    console.log(req.body);
    res.send("Selam, POST isteği atıldı.");
})

app.put(helloPath, (req, res) => {
    console.log(req.body)
    res.send("Selam, PUT isteği atıldı.")
})

app.delete(helloPath, (req, res) => {
    console.log(req.body)
    res.send("Selam, DELETE isteği atıldı.")
})

app.listen(5000, ()  => {
    console.log('Uygulama calistirildi');
})