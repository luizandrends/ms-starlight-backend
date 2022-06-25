import { Request, Response } from 'express';

import AppError from 'errors/AppError';
import { create } from '../utils/createS3Bucket';
import { find } from '../utils/findBucketByName';

class CreateS3Controller {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, bucketVersioning, buisnessUnity, tribe, team } = request.body;

    const checkIfBucketExists = await find(name);

    if (checkIfBucketExists) {
      throw new AppError('Bucket Already exists', 400);
    }

    const bucket = await create({
      name,
      bucketVersioning,
      buisnessUnity,
      tribe,
      team,
    });

    return response.json(bucket);
  }
}

export default new CreateS3Controller();
