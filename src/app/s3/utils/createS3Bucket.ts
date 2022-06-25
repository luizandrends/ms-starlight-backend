import { S3 } from '@prisma/client';
import { S3DTO } from '../dtos/S3DTO';
import { prisma } from '../../../database';

const create = async (data: S3DTO): Promise<S3> => {
  const { name, bucketVersioning, buisnessUnity, tribe, team } = data;

  const bucket = await prisma.s3.create({
    data: {
      name,
      bucketVersioning,
      buisnessUnity,
      tribe,
      team,
    },
  });

  return bucket;
};

export { create };
