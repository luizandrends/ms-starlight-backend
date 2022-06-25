import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateLambdaController from '../controllers/CreateLambdaController';
import ListlambdasController from '../controllers/ListLambdasController';
import ListLambdaByBuController from '../controllers/ListLambdaByBuController';
import ListLambdasByTribeController from '../controllers/ListLambdasByTribeController';
import ListLambdasByTeamController from '../controllers/ListLambdasByTeamController';
import GetLambdaByNameController from '../controllers/GetLambdaByNameController';
import DeleteLambdaController from '../controllers/DeleteLambdaController';

const lambdaRouter = Router();

lambdaRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      runtime: Joi.string().required(),
      timeout: Joi.number().required(),
      handler: Joi.string().required(),
      memory: Joi.string().required(),
      buisnessUnity: Joi.string().required(),
      tribe: Joi.string().required(),
      team: Joi.string().required(),
    },
  }),
  CreateLambdaController.handle
);

lambdaRouter.get('/list', ListlambdasController.handle);
lambdaRouter.get(
  '/list/bu/:buName',
  celebrate({
    [Segments.PARAMS]: {
      buName: Joi.string().required(),
    },
  }),
  ListLambdaByBuController.handle
);
lambdaRouter.get(
  '/list/tribe/:tribeName',
  celebrate({
    [Segments.PARAMS]: {
      tribeName: Joi.string().required(),
    },
  }),
  ListLambdasByTribeController.handle
);
lambdaRouter.get(
  '/list/team/:teamName',
  celebrate({
    [Segments.PARAMS]: {
      teamName: Joi.string().required(),
    },
  }),
  ListLambdasByTeamController.handle
);

lambdaRouter.get(
  '/get/name/:lambdaName',
  celebrate({
    [Segments.PARAMS]: {
      lambdaName: Joi.string().required(),
    },
  }),
  GetLambdaByNameController.handle
);

lambdaRouter.delete(
  '/delete/name/:lambdaName',
  celebrate({
    [Segments.PARAMS]: {
      lambdaName: Joi.string().required(),
    },
  }),
  DeleteLambdaController.handle
);

export default lambdaRouter;
