import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateS3Controller from '../controllers/CreateS3Controller';

const S3Router = Router();

S3Router.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      bucketVersioning: Joi.boolean().required(),
      buisnessUnity: Joi.string().required(),
      tribe: Joi.string().required(),
      team: Joi.string().required(),
    },
  }),
  CreateS3Controller.handle
);

export default S3Router;
