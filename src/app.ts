import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json({ limit: '10mb' }));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.send("I'm Ok!")
})
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
