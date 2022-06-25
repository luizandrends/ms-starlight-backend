import { Lambda } from '@prisma/client';
import { prisma } from '../../../database';

const find = async (name: string): Promise<Lambda | null> => {
  const lambda = await prisma.lambda.findUnique({
    where: { name },
  });

  return lambda;
};

export { find };
