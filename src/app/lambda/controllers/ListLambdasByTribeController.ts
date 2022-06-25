import { Request, Response } from 'express';

import { listByTribe } from '../utils';

class ListLambdasByTribeController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { tribeName } = request.params;

    const lambdas = await listByTribe(tribeName);

    return response.json(lambdas);
  }
}

export default new ListLambdasByTribeController();
