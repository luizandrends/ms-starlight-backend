import AppError from 'errors/AppError';
import { Request, Response } from 'express';

import { findByName, deleteLambda } from '../utils';

class DeleteLambdaController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { lambdaName } = request.params;

    const lambda = await findByName(lambdaName);

    if (!lambda) {
      throw new AppError('Unexistent Lambda', 400);
    }

    await deleteLambda(lambdaName);

    return response.json({
      ok: true,
    });
  }
}

export default new DeleteLambdaController();
