import { Request, Response } from 'express';

import { listByBu } from '../utils';

class ListLambdaByBuController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { buName } = request.params;

    const lambdas = await listByBu(buName);

    return response.json(lambdas);
  }
}

export default new ListLambdaByBuController();
