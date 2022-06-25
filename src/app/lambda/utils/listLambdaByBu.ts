import { Lambda } from '@prisma/client';

import { prisma } from '../../../database';

const list = async (buName: string): Promise<Lambda[] | null> => {
  const lambdas = await prisma.lambda.findMany({
    where: { buisnessUnity: buName },
  });

  return lambdas;
};

export { list };
