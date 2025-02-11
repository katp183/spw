const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Mensaje en consola');
    res.send('Hello World');
});

app.get('/sum', (req, res) => {
    const { num1, num2, ...rest } = req.query;
    const numbers = [parseInt(num1, 10), parseInt(num2, 10)];
    
    for (const key in rest) {
        numbers.push(parseInt(rest[key], 10));
    }

    if (numbers.some(isNaN)) {
        return res.status(400).send('All query parameters must be valid numbers');
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`Sum of ${numbers.join(', ')} is ${sum}`);
    res.send(`Sum is ${sum}`);
});

app.post('/login', (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        return res.status(400).send('Both user and password are required');
    }
    console.log(`User: ${user}, Password: ${password}`);
    res.json({ user, password });
});

module.exports = app;
