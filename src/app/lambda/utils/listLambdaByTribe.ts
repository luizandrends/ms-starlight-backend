import { Lambda } from '@prisma/client';

import { prisma } from '../../../database';

const list = async (tribeName: string): Promise<Lambda[] | null> => {
  const lambdas = await prisma.lambda.findMany({
    where: { tribe: tribeName },
  });

  return lambdas;
};

export { list };
