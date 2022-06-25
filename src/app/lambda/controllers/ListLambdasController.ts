import { Request, Response } from 'express';

import { listAll } from '../utils';

class ListlambdasController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const lambdas = await listAll();

    return response.json(lambdas);
  }
}

export default new ListlambdasController();
