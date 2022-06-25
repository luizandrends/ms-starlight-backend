import { Lambda } from '@prisma/client';
import { LambdaDTO } from '../dtos/LambdaDTO';
import { prisma } from '../../../database';

const create = async (data: LambdaDTO): Promise<Lambda> => {
  const {
    name,
    runtime,
    timeout,
    handler,
    memory,
    buisnessUnity,
    tribe,
    team,
  } = data;

  const lambda = await prisma.lambda.create({
    data: {
      name,
      runtime,
      timeout,
      handler,
      memory,
      buisnessUnity,
      tribe,
      team,
    },
  });

  return lambda;
};

export { create };
