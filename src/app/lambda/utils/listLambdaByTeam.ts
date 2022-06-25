import { Lambda } from '@prisma/client';

import { prisma } from '../../../database';

const list = async (teamName: string): Promise<Lambda[] | null> => {
  const lambdas = await prisma.lambda.findMany({
    where: { team: teamName },
  });

  return lambdas;
};

export { list };
