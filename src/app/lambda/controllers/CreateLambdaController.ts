import { Request, Response } from 'express';

import AppError from 'errors/AppError';

import { kafka } from '../../../kafka';

import { LambdaDTO } from '../dtos/LambdaDTO';

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

    const producer = kafka.producer();

    const checkIfLambdaExists = await findByName(name);

    if (checkIfLambdaExists) {
      throw new AppError('Lambda Already exists', 400);
    }

    const lambdaData: LambdaDTO = {
      name,
      runtime,
      timeout,
      handler,
      memory,
      buisnessUnity,
      tribe,
      team,
    };

    const lambda = await create(lambdaData);

    const eventPayload = JSON.stringify(lambdaData);

    await producer.connect();

    const event = await producer.send({
      topic: 'ms-create-lambda-function-qa',
      messages: [
        {
          value: eventPayload,
        },
      ],
    });

    console.log(event);

    await producer.disconnect();

    return response.json(lambda);
  }
}

export default new CreateUserController();
