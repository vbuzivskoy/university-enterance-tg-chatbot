import http from 'http';
import { app } from './app';

const port = process.env.PORT || '30';

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is up and listening on port ${port}...`);
});
