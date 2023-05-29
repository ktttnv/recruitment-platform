import express from 'express';

import initRoutes from '../routes/routes';

export default function expressApp(app: ReturnType<typeof express>) {
    app.use(initRoutes());
}
