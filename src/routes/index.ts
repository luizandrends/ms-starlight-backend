import { Router } from 'express';

import lambdaRouter from 'app/lambda/routes';
import S3Router from 'app/s3/routes';

const routes = Router();

routes.use('/lambda', lambdaRouter);
routes.use('/s3', S3Router);

export default routes;
