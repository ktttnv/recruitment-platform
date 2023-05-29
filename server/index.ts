import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import connectDB from './config/startup/db';
import expressApp from './config/startup/express';
import config from './config/environment';

const app = express();
const server = createServer();
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

expressApp(app);

app.get('/status', (_req, res) => res.json({ status: 'Ok!' }));

if (config.initializeServer) {
    setImmediate(() => {
        const BACKEND_APP_PORT = Number(config.backendPort);
        server.listen(BACKEND_APP_PORT, config.ip, () => {
            console.info(`Express server listening on port ${BACKEND_APP_PORT} in ${app.get('env')} mode`);
        });
    });
}

function createServer(): http.Server {
    return http.createServer(app);
}

async function main() {
    await connectDB;
}

main().catch(console.log);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Facts Events service listening at http://localhost:${PORT}`);
});
