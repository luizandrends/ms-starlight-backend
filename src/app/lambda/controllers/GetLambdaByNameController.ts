import { Request, Response } from 'express';

import { findByName } from '../utils';

class GetLambdaByNameController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { lambdaName } = request.params;

    const lambda = await findByName(lambdaName);

    return response.json(lambda);
  }
}

export default new GetLambdaByNameController();
