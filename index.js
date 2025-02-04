const app = require('./app');
const port = 8080;

(async () => {

    console.log('starting server');
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

})();

