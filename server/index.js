import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './routes';

const isTesting = process.env.NODE_ENV === 'test';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (!isTesting) {
  app.use(morgan('tiny'));
}

// Routes
app.use('/api', routes);

// Listen when not in test env
if (!isTesting) {
  app.listen(port, () =>
    console.log(`Listening on port ${port} | http://localhost:${port}`)
  );
}

export default app;
