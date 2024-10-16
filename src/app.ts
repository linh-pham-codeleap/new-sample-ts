import express from 'express';
import router from './routes';

const app = express();
const port = process.env.PORT || 3005;

// Middlewares
app.use(express.json());

// Use aggregated routes
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
