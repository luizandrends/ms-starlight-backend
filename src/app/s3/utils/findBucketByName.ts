import { S3 } from '@prisma/client';
import { prisma } from '../../../database';

const find = async (name: string): Promise<S3 | null> => {
  const bucket = await prisma.s3.findUnique({
    where: { name },
  });

  return bucket;
};

export { find };
