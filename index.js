import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import logger from './middleware/logger.js';
import routes from './routes/catRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();

//use logger here

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// set template engine
app.set('view engine', 'ejs'); // telling which template we gonna use
app.set('views', path.join(PATH, 'views')); // telling where the files exist

// serve static folder
app.use(express.static(path.join(PATH, 'public')));

// use routes here
app.use(routes);

app.use((req, res) => {
    res.status(404).render('404', {
        errorStatus: '404',
        title: 'Page not found',
        message: `This page doesn't exist`
    });
});

app.listen(PORT, (req, res) => {
    console.log(`Server is up and running on port : ${PORT}`);
});
