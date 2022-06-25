import { Request, Response } from 'express';

import AppError from 'errors/AppError';

import { create, findByName } from '../utils';

class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      runtime,
      timeout,
      handler,
      memory,
      buisnessUnity,
      tribe,
      team,
    } = request.body;

    const checkIfLambdaExists = await findByName(name);

    if (checkIfLambdaExists) {
      throw new AppError('Lambda Already exists', 400);
    }

    const lambda = await create({
      name,
      runtime,
      timeout,
      handler,
      memory,
      buisnessUnity,
      tribe,
      team,
    });

    return response.json(lambda);
  }
}

export default new CreateUserController();
