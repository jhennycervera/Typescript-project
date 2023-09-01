import express from 'express';
import config from './util/config';

const app = express();


app.get('/', (req, res) => {
    res.status(200).json({message: "Success!"});
})

const port = config.PORT;
app.listen(port, () => {
    console.log(`\nServer running on ---> http://localhost:${port}\n`);
});