const app = require('./index');

const connect = require('./configs/db');

const port = 2235;

app.listen(port,async () => {
    try {
        console.log(`listening on port ${port}`);
        await connect();
    } catch (error) {
        console.log(error);
    }
})