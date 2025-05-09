import express from "express";
import axios from "axios";

const port = 9876;
const windowSize = 10;
const reqTimeout = 500;
const ids = ['p', 'f', 'e', 'r'];
const endpoints = {
    p: 'http://20.244.56.144/evaluation-service/primes',
    f: 'http://20.244.56.144/evaluation-service/fibo',
    e: 'http://20.244.56.144/evaluation-service/even',
    r: 'http://20.244.56.144/evaluation-service/rand'
  };

  let numWindow = [];

const app = express();
app.use(express.json());

app.get('/numbers/:numberid', async (req, res) => {
    res.send('Calculator Api');
})

app.listen(port, () => {
    console.log(`Api listening on port ${port}`);
})


