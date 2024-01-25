import express from 'express';
import indexRoute from './routes/index.routes.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(indexRoute);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
