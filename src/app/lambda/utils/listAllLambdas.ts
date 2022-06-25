import { Lambda } from '@prisma/client';

import { prisma } from '../../../database';

const list = async (): Promise<Lambda[] | null> => {
  const lambdas = await prisma.lambda.findMany();

  return lambdas;
};

export { list };
